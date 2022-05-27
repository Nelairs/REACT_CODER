import * as React from 'react';
import  './ItemDetail.css'

const   ItemDetail  =   ({data})    =>  {

    return(
        <div>
            <img    src={data.image}></img>
            <h3>{data.title}</h3>
            <p>${data.price}</p>
        </div>
    )
}


export  default ItemDetail;