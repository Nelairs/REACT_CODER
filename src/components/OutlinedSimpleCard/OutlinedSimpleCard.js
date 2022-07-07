import React, { useEffect, useState,useContext } from "react";
import { Link } from 'react-router-dom';
import { Grid, Card, Button } from "@mui/material";
import db from "../../utils/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import CartContext  from '../../context/CartContext';

import "./OutlinedSimpleCard.css";

export default function OutlinedCard() {
  const [products, setProducts] = useState([]);
  //const { category } = useParams()
  const {addToCart}   =   useContext(CartContext)

  useEffect(() => {
    setProducts([]);
    //console.log();
    getProducts().then((productos) => {
      //console.log("productos: ", productos);
      setProducts(productos);
    });
  }, []);

  const getProducts = async () => {
    const productsCollection = collection(db, "products");
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
    <Grid container spacing={4} className="card-series-container">
      {products.map(({ title, path,price, id }) => {
        return (
          <Grid item md={4} className="card-series-item">
            <Card variant="outlined" className="card-series">
              <img src={`${path}`} alt={`${title}`} className="image" />

              <Link to={`/producto/${id}`}>
                <div class="middle">
                  <Button disableRipple className="detail">
                    Ver mas
                  </Button>
                </div>
              </Link>
            </Card>
            <Button className="cart-add" onClick={()  =>  addToCart({path, title , price, id})}>Agregar a carrito!</Button>
          </Grid>
        );
      })}
    </Grid>
  );
}
