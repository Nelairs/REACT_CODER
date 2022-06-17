import  './ProductDetail.css';
import React, { useEffect, useState, useContext} from 'react';
import { useParams, useNavigate, Link  } from 'react-router-dom';
import { Divider,Button } from '@mui/material';
import CartContext  from '../../context/CartContext';


/* -------------------------------- FIREBASE -------------------------------- */
import db from '../../utils/firebase.config'
import  { collection, getDocs, where, query, getDoc, doc} from 'firebase/firestore'
import { async } from '@firebase/util';

const ProductDetail = ({productos})  =>  {

    const   {id}    =   useParams();
    const   [count, setCount]   =   useState(1);
    const   [showAddCart,   setShowAddCart] =   useState(true)
    const [products, setProducts] = useState([])

    const {addToCart}   =   useContext(CartContext)

    const   addCount    =   ()  =>  {
    
        if(count < productFilter.stock){
            setCount(count + 1)
        }
    }
    
    const   removeCount =   ()  =>  {
        setCount(count-1)
    }

    useEffect( () => {
        setProducts([])
        productFilter()
        
    }, [id])

    const getProducts = async () => {
        const productCollection = collection(db, "productos")
        const productSnapshot = await getDoc(doc(db, 'productos', id)) 
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            //console.log("product: ", product)
            return product
        })
        setProducts(productList)
        console.log(productList)
        return productList
    }

    const productFilter =   async   ()  =>  {
        const snap = await getDoc(doc(db, 'productos', id))  
        
        if (snap.exists()) {
           
            //console.log(snap.data())
            setProducts(snap.data())
            return snap.data()
          }else {
            console.log("No such document")
          }
    }


 

    
    const   {image, title, price,   stock, description}  =   products
    //console.log(image)
    return  (
        
        <div    className="product-detail-container">
            
            <div    className="img-container">
                <div    className='img-container-primary'>
                    <img    src={`./${image}`}></img>
                </div>
            </div>

            <div    className="detail-container">
                <h1>{title}</h1>
                <Divider/>
                <h2>${price}</h2>
                <Divider/>
                <h3>{description}</h3>
                <Divider/>
                <div    className='buttons-detail'>
                        {!showAddCart   ?   
                        <>
                        <Link   to={'/cart'} >
                            <Button variant={'contained'}   >Ver detalle carrito</Button>
                        </Link>
                        <Link   to={'/'}>
                            <Button variant={'contained'}>Seguir comprando</Button>
                        </Link>
                        </>
                        
                        :
                        
                        <div    className='count-item'>
                            <Button onClick={removeCount}   disabled={count === 0}>-</Button>
                            <p>{count}</p>
                            <Button onClick={addCount} disabled={count === stock}>+</Button>
                            <Button variant={'text'} className="card-item-button" 
                                onClick={()  =>  {setShowAddCart(false); 
                                addToCart({image, title, price,   stock});}}>
                                Agregar al carrito
                            </Button>
                        </div>
                        }
                </div>
            </div>
        </div>    
    )
    
}



export  default ProductDetail;