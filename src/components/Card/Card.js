import './Card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import  {useState}  from    'react';

//Functional Component
const CardItem = ({ image, title, price }) => {
    // console.log("Propiedades de Card: ")
const   [count, setCount]   =   useState(0);

const   addCount    =   ()  =>  {
    setCount(count + 1)
}

const   removeCount =   ()  =>  {
    setCount(count-1)
}

    return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className="card-item">
                    <div>
                        <img src={`./${image}`} /> 
                    </div>
                    <p>{title}</p>
                    <span>$ {price}</span>
                        <div    className='count-item'>
                        <Button onClick={removeCount}   disabled={count === 0}>-</Button>
                        <p>{count}</p>
                        <Button onClick={addCount}>+</Button>
                        </div>
                    
                    <Button variant={'contained'} >Detalle</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem