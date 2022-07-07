import  './ProductDetail.css';
import React, { useEffect, useState, useContext} from 'react';
import { useParams, useNavigate, Link  } from 'react-router-dom';
import { Divider,Button } from '@mui/material';
import CartContext  from '../../context/CartContext';


/* -------------------------------- FIREBASE -------------------------------- */
import db from '../../utils/firebase.config'
import  { collection, getDocs, where, query, getDoc, doc} from 'firebase/firestore'

const ProductDetail = ({productos})  =>  {

    const   {id}    =   useParams();
    const   [count, setCount]   =   useState(1);
    const   [showAddCart,   setShowAddCart] =   useState(true)
    const [products, setProduct] = useState({})

    const {addToCart}   =   useContext(CartContext)

    const   addCount    =   ()  =>  {
    
        if(count < productFilter.stock){
            setCount(count + 1)
        }
    }
    
    const   removeCount =   ()  =>  {
        setCount(count-1)
    }

    useEffect(() => {
        
        getProduct()
        .then( (prod) => {
            //console.log("Respuesta getProduct: ", prod)
            setProduct(prod)
        })

    }, [id])

    const getProduct = async() => {

        const docRef = doc(db, "stared_products", id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        return product
    }

    const productFilter = () => {products.find( (product) => {
        return product.id == id
    })}



    
    const   {path, title, price,   stock, description}  =   products
    //console.log(image)
    return  (
        
        <div    className="product-detail-container">
            
            <div    className="img-container">
                <div    className='img-container-primary'>
                <img src={`${path}`} alt={`${title}`}></img>
                </div>
            </div>

            <div    className="det-container">
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
                                addToCart({path, title, price,   stock});}}>
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