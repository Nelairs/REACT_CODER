import * as React from 'react';
import CardItem from '../Card/Card'
import { Grid } from '@mui/material';

const CardList = ({title}) => {

    return(
        <>
        <h2>{title}</h2>
        <Grid container >
            <Grid item md={3}>
                <CardItem title={"Maceta negra"} price={2500} 
                    image={["./macetas_1/maceta_david1.jpeg",
                            "./macetas_1/maceta_david2.jpeg",
                            "./macetas_1/maceta_david3.jpeg",
                            "./macetas_1/maceta_david4.jpeg"]} stock={3} id={1}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Maceta blanca"} price={2000} 
                    image={["./macetas_2/maceta_blanca1.jpeg",
                            "./macetas_2/maceta_blanca2.jpeg"]} stock={4} id={2}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Maceta Calavera"} price={3200} 
                    image={["./macetas_3/maceta_calavera1.jpg",
                            "./macetas_3/maceta_calavera2.jpeg"]} stock={8} id={3}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Maceta pokemon"} price={3200} 
                    image={["./macetas_4/maceta_poke1.jpeg",
                            "./macetas_4/maceta_poke2.jpeg",
                            "./macetas_4/maceta_poke3.jpg"]} stock={10} id={4}/>
            </Grid>
        </Grid>
        </>
    )
}

export default CardList