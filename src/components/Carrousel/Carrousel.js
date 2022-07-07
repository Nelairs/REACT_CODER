import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import "./Carrousel.css";
import db from "../../utils/firebase.config";
import { collection, getDocs } from "firebase/firestore";


const Carrousel = () => {
    const [products, setProducts] = useState([]);
    //const { category } = useParams()
  
    useEffect(() => {
      setProducts([]);
      console.log();
      getProducts().then((productos) => {
        //console.log("productos: ", productos)
        setProducts(productos);
      });
    }, []);
  
    const getProducts = async () => {
      const productsCollection = collection(db, "carrousel-home");
      const productsSnapshot = await getDocs(productsCollection);
      const productsList = productsSnapshot.docs.map((doc) => {
        let product = doc.data();
        product.id = doc.id;
        //console.log("product: ", product)
        return product;
      });
      return productsList;
    };
  return (
    <div className="carousel-container-primary">
         <Carousel className="carousel-container">
            {
                products.map( (item, i) => <Item key={i} item={item} className='carousel-item'/> )
            }
        </Carousel>
    </div>
  );
};
function Item(products)
{
    return (
        <Paper className="carousel-img-container">
            <img src={`${products.item.path}`} ></img>
            
        </Paper>
    )
}
export default Carrousel;
