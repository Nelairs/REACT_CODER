import * as React from 'react';
import CardItem from '../Card/Card'
import { Grid } from '@mui/material';

const CardList = ({title}) => {

    return(
        <>
        <h2>{title}</h2>
        <Grid container >
            <Grid item md={3}>
                <CardItem title={"Maceta negra"} price={2500} image={"macetas1.jpeg"} stock={3}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Maceta blanca"} price={2000} image={"macetas2.jpeg"} stock={4}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Maceta Calavera"} price={3200} image={"macetas3.jpg"} stock={8}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Maceta Calavera"} price={3200} image={"macetas3.jpg"} stock={10}/>
            </Grid>
        </Grid>
        </>
    )
}

export default CardList