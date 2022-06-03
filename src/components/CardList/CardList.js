import * as React from 'react';
import CardItem from '../Card/Card'
import { Grid } from '@mui/material';
import '../../utils/productosMock.utils';

const CardList = ({title,   productos}) => {

    return(
        <>
        <h2>{title}</h2>
        <Grid container >
            {
            productos.map(  ({  title,  price,  image,   stock,  id})    =>  {
                return(
                    <Grid item md={3}>
                        <CardItem title={title}  price={price}  image={image}    stock={stock}   id={id}/>
                    </Grid>
                )
            })}
        </Grid>
        </>
    )
}

export default CardList;