import * as React from 'react';
import  './NavBar.css';
import  AppBar  from '@mui/material/AppBar';
import  Toolbar from    '@mui/material/Toolbar';
import  Button  from    '@mui/material/Button';
import  CartWidget  from '../CartWidget/CartWidget.js';
import {Link}   from 'react-router-dom';


const   NavBar  =   ()  =>  {

    return(
        <AppBar position="sticky"   className='header-primary'>
            <Toolbar>
                <div    className='container-logo'>
                    <Link to={'/'}><img    src='./logo_ivrea.png' alt=''/></Link>
                </div>
                <ul className='navbar'>
                    <li>
                    <Link to={'/'}><Button disableRipple   style={{backgroundColor:    'transparent'}}variant='text'   className='navbar_btn'>Inicio</Button></Link>
                    </li>
                  
                  
                </ul>
                <CartWidget/>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;