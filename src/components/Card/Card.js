import './Card.css';
import * as React from 'react';
import Modal from '../Modal/Modal';
import  MsgContainer from '../MsgContainer/MsgContainer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import  {useState}  from    'react';



const CardItem = ({ image, title, price,   stock}) => {


const   [count, setCount]   =   useState(0);


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
            <CardContent>
                <div className="card-item">
                    <div>
                        <img src={`./${image}`} alt=''/> 
                    </div>
                    <p>{title}</p>
                    <span>$ {price}</span>
                    <MsgContainer message={'Stock: ' + stock}/>
                    <Modal/>
                        <div    className='count-item'>
                        <Button onClick={removeCount}   disabled={count === 0}>-</Button>
                        <p>{count}</p>
                        <Button onClick={addCount} disabled={count === stock}>+</Button>
                        </div>
                    
                        <Button variant={'contained'} className="card-item-button">Comprar</Button>
                </div>
               
            </CardContent>
            
        </Card>
    )
}

export default CardItem