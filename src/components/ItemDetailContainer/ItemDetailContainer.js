import  {useEffect, useState}   from 'react';
import  {productoSingle}  from '../../utils/productosMock.utils';
import ItemDetail   from    '../ItemDetail/ItemDetail'
import * as React from 'react';
import  './ItemDetailContainer.css'


const ItemDetailContainer   =   ()  =>  {
    const   [producto,  setProduct]  =   useState();

    const   getItem =   ()  =>  {
        return  new Promise(    (res,   rej)    =>  {
            setTimeout(()   =>  {
                res(productoSingle);
            },  2000)
        })
    }

    useEffect(()    =>  {
        getItem()
        .then(  (res)   => {
            setProduct(res);
        })
    },  [])

    return(
        <div    className='item-detail-container'>
        
            <h2>CONTENEDOR ITEM</h2>
            <ItemDetail data={productoSingle}/>
        </div>
    )
}

export default  ItemDetailContainer;