import './Card.css';
import React from 'react';
import Modal from '../Modal/Modal';
import  MsgContainer from '../MsgContainer/MsgContainer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import  {useState,  useContext}  from    'react';
import { Link } from 'react-router-dom';
import CartContext  from '../../context/CartContext';

const CardItem = ({ image, title, price,   stock, id}) => {


const   [count, setCount]   =   useState(0);
const {addToCart}   =   useContext(CartContext)

const   addCount    =   ()  =>  {

    if(count < stock){
        setCount(count + 1)
    }
}

const   removeCount =   ()  =>  {
    setCount(count-1)
}

    return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent    className='cardContent'>
                <div className="card-item">
                    <div>
                        <Link to={`/producto/${id}`}>
                        <img src={`./${image[0]}`} alt=''/> 
                        </Link>
                    </div>
                    <p>{title}</p>
                    <span>$ {price}</span>
                    <MsgContainer message={'Stock: ' + stock}/>
                    <Modal  className='card-modal'  image={image} title={title} price={price} stock={stock} />
                        <div    className='count-item'>
                        <Button onClick={removeCount}   disabled={count === 0}>-</Button>
                        <p>{count}</p>
                        <Button onClick={addCount} disabled={count === stock}>+</Button>
                        </div>
                    
                        <Button variant={'contained'} className="card-item-button"  
                            >Agregar a carrito</Button>
                </div>
               
            </CardContent>
            
        </Card>
    )
}

export default CardItem;