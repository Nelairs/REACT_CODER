import CardItem from '../Card/Card'
import { Grid } from '@mui/material';

const CardList = ({title}) => {
    const productos = [
        {
            title : 'Remera Oversize',
            price : 1500,
            image : 'musculosa1.jpeg'
        },
        {
            title : 'Remera Oversize',
            price : 1500,
            image : 'musculosa1.jpeg'
        },
        {
            title : 'Remera Oversize',
            price : 1500,
            image : 'musculosa1.jpeg'
        },
    ]
    return(
        <>
        <h2>{title}</h2>
        <Grid container >
            <Grid item md={3}>
                <CardItem title={"Maceta negra"} price={2500} image={"macetas1.jpeg"}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Maceta blanca"} price={200} image={"macetas2.jpeg"}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Maceta Calavera"} price={3200} image={"macetas3.jpg"}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Maceta Calavera"} price={3200} image={"macetas3.jpg"}/>
            </Grid>
        </Grid>
        </>
    )
}

export default CardList