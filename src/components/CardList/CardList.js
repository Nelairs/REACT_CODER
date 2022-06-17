import React,   {useEffect, useState, useParams} from 'react';
import CardItem from '../Card/Card'
import { Grid } from '@mui/material';


/* -------------------------------- FIREBASE -------------------------------- */
import db from '../../utils/firebase.config'
import  { collection, getDocs} from 'firebase/firestore'




const CardList = ({title}) => {
    const [products, setProducts] = useState([])
    //const { category } = useParams()

    useEffect( () => {
        setProducts([])
        console.log()
        getProducts()
        .then( (productos) => {
            console.log("productos: ", productos)
            setProducts(productos)
        })
    }, [])


    const getProducts = async () => {
        const productsCollection = collection(db, "productos")
        const productsSnapshot = await getDocs(productsCollection)
        const productsList = productsSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            //console.log("product: ", product)
            return product
        })
        return productsList
    }


    return(
        <>
        <h2>{title}</h2>
        <Grid container >
            {
            products.map(  ({  title,  price,  image,   stock,  id})    =>  {
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