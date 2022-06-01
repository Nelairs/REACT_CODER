import  {useEffect, useState}   from 'react';
import  {productoSingle}  from '../../utils/productosMock.utils';
import ItemDetail   from    '../ItemDetail/ItemDetail'
import * as React from 'react';
import  './ItemDetailContainer.css'


const ItemDetailContainer   =   ({image, title,  price,    stock})  =>  {
    

    return(
        <div    className='item-detail-container'>
        
            <h2>CONTENEDOR ITEM</h2>
            <ItemDetail data={productoSingle}   image={image} title={title} price={price} stock={stock}/>
        </div>
    )
}

export default  ItemDetailContainer;