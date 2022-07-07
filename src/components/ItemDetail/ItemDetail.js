import React, {useState, useContext} from "react";
import "./ItemDetail.css";
import {Button, MenuItem, Select} from "@mui/material";
import { Link } from 'react-router-dom'
import CartContext  from '../../context/CartContext';

const ItemDetail = ({data}) => {
  const [size, setSize] = useState('');
  const [cantidad, setCantidad] = useState(1)
  const   [showAddCart,   setShowAddCart] =   useState(true)
  const   [count, setCount]   =   useState(1);

  const {addToCart}   =   useContext(CartContext)

  const handleChange = (event) => {
      setSize(event.target.value);
  };
  const addProductToCart = () => {
      //console.log("PRODUCTO A AGREGAR: ")
      //console.log("CANTIDAD:", cantidad )
  }

  const   addCount    =   ()  =>  {
    
    if(count < data.stock){
        setCount(count + 1)
    }
}

const   removeCount =   ()  =>  {
    setCount(count-1)
}
  //console.log("Data desde ItemDetail: ", data)
  const {path, title, price, stock}  = data;
  return (
    <div className='detail-container'>
        <div className="detail-image-container">
            <img src={`.${path}`} alt="imgProduct"/>
        </div>
        <div className="detail-product-info">
            <div className='detail-product-info__title'>
                <h2>{title}</h2>
            </div>
            <p>{price}</p>
            <span>3 Cuotas sin interés de $ {price / 3}</span>
            <div className='color-group-selector'>
                <button className='color-selector black'></button>
                <button className='color-selector green'></button>
                <button className='color-selector red'></button>
            </div>
            
            <label>Selecciona tu talle</label>
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
          
          

        </div>
    </div>
)
};

export default ItemDetail;
