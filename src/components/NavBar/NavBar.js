import  './NavBar.css';
import  AppBar  from '@mui/material/AppBar';
import  Toolbar from    '@mui/material/Toolbar';
import  Button  from    '@mui/material/Button';
import  CartWidget  from '../CartWidget/CartWidget.js';



const   NavBar  =   ()  =>  {

    return(
        <AppBar position="static"   className='header-primary'>
            <Toolbar>
                <div    className='container-logo'>
                    <img    src='./3d_icon.png' alt=''/>
                </div>
                <ul className='navbar'>
                    <li>
                        <Button disableRipple   style={{backgroundColor:    'transparent'}}variant='text'   className='navbar_btn'>Inicio</Button>
                    </li>
                    <li>
                        <Button disableRipple   style={{backgroundColor:    'transparent'}}variant='text'   className='navbar_btn'>Productos</Button>
                    </li>
                    <li>
                        <Button disableRipple   style={{backgroundColor:    'transparent'}}variant='text'   className='navbar_btn'>FAQs</Button>
                    </li>
                    <li>
                        <Button disableRipple   style={{backgroundColor:    'transparent'}}variant='text'   className='navbar_btn'>Contacto</Button>
                    </li>
                </ul>
                <CartWidget/>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;