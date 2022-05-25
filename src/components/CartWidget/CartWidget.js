import * as React from 'react';
import  ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';

const   CartWidget  =   ()  =>  {

    return(
        <Button style={{backgroundColor:    'transparent'}} variant='outlined' className='cart-btn'>
            <ShoppingCartIcon/>
        </Button>
    )
}

export  default CartWidget;