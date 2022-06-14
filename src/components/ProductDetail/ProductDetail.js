import  './ProductDetail.css';
import React, { useEffect, useState, useContext} from 'react';
import { useParams, useNavigate, Link  } from 'react-router-dom';
import { Divider,Button } from '@mui/material';
import CartContext  from '../../context/CartContext';

const ProductDetail = ({productos})  =>  {

    const   navigate = useNavigate()
    const   {id}    =   useParams();
    const [product , setProduct] = useState({})
    const   [count, setCount]   =   useState(1);
    const   [showAddCart,   setShowAddCart] =   useState(true)

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
      
        //console.log("productFilter: ", productFilter)
        if(productFilter === undefined){
            navigate('/notFound')
        }else {
            
            setProduct(productFilter)
            const   {image, title, price,   stock}  =   productFilter
        }
    }, [id])

    const productFilter = productos.find( (product) => {
        return product.id == id
    })
    return  (
        
        <div    className="product-detail-container">
            
            <div    className="img-container">
                <div    className='img-container-primary'>
                    <img    src={`../${productFilter.image[0]}`}></img>
                </div>
            </div>

            <div    className="detail-container">
                <h1>{productFilter.title}</h1>
                <Divider/>
                <h2>${productFilter.price}</h2>
                <Divider/>
                <h3>{productFilter.description}</h3>
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
                            <Button onClick={addCount} disabled={count === productFilter.stock}>+</Button>
                            <Button variant={'text'} className="card-item-button" 
                                onClick={()  =>  {setShowAddCart(false); addToCart({productFilter});}}>
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