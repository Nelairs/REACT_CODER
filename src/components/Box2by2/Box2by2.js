import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import "./Box2by2.css";

import db from "../../utils/firebase.config";
import { collection, getDocs } from "firebase/firestore";

const Box2by2 = ({collectionName}) => {
  const [products, setProducts] = useState([]);
  //const { category } = useParams()

  useEffect(() => {
    setProducts([]);
    //console.log();
    getProducts().then((productos) => {
      //console.log("productos: ", productos);
      setProducts(productos);
    });
  }, []);

  const getProducts = async () => {
    const productsCollection = collection(db, collectionName);
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
    <Grid container spacing={4} className="container-2by2">
      {products.map(({ title, path, id }) => {
        return (
          <Grid item  md={4}>
            <img src={`${path}`} alt={`${title}`}></img>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Box2by2;
