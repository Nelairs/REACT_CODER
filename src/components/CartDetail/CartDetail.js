import React, { useContext, useState } from "react";
import {  Button } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Delete } from "@mui/icons-material";
import CartContext from "../../context/CartContext.js";
import "./CartDetail.css";
import { Link, useNavigate } from "react-router-dom";
import db from '../../utils/firebase.config'
import { addDoc, collection } from 'firebase/firestore'

const CartDetail = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const { cartListItems, totalPrice } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault()
    setOrder({...order, buyer: formValue})
    saveData({...order, buyer: formValue})
}
const handleChange = (e) => {
  
  setFormValue({...formValue, [e.target.name]: e.target.value})
}
const [formValue, setFormValue] = useState({
    name: '',
    phone: '',
    email: ''
})
const [order, setOrder] = useState({
    buyer: {},
    items: cartListItems.map( item => {
        return {
            id: item.id,
            title: item.title,
            price: item.price,
        }
    } ),
    total: totalPrice
})
const navigate = useNavigate()
const [success, setSuccess] = useState()
const finishOrder = () => {
  navigate('/')
}
const saveData = async (newOrder) => {
  const orderFirebase = collection(db, 'ordenes')
  const orderDoc = await addDoc(orderFirebase, newOrder)
  console.log("orden generada: ", orderDoc.id)
  setSuccess(orderDoc.id)
  
}
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
     
    >{success ? (
      <div>
          La order se genero con exito!
          Numero de orden: {success}
          <button onClick={finishOrder}>Aceptar</button>
      </div>
  ) : (
      <form className="form-contact" onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          name="name"
          label="Nombre y Apellido"
          variant="outlined"
          value={formValue.name}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          name="phone"
          label="Telefono"
          variant="outlined"
          value={formValue.phone}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          name="email"
          label="Mail"
          value={formValue.email}
          variant="outlined"
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>)}
      <Divider />
     
    </Box>
  );

  return (
    <div className="cart-general-container">
      <h1>Checkout:</h1>
      <div className="cart-list-container">
        <div className="col-cart-table__head">
          <h2>Producto</h2>
          <h2>Descripcion</h2>
          <h2>Precio Unitario</h2>
          <h2>Cantidad</h2>
          <h2>Quitar</h2>
        </div>
        {cartListItems.map((item) => {
          const { id, title, image, price } = item;
          return (
            <div className="cart-table__content" key={id}>
              <div className="cart-table__content-img">
                <img src={`/${image[0]}`} />
              </div>
              <div className="cart-table__content-title">
                <p>{title}</p>
              </div>
              <div className="cart-table__content-price">
                <p>$ {price}</p>
              </div>
              <div className="cart-table__content-quantity">
                <p>1</p>
              </div>
              <div className="cart-table__content-price">
                <button className="btn-delete">
                  <Delete />
                </button>
              </div>
            </div>
          );
        })}

        <div className="cart-footer">
          <Button className="btn-custom">
            <Link to={"/"} className="continuar-comprando">
              Continuar comprando
            </Link>
          </Button>

          <div className="cart-checkout-details">
            <div className="cart-checkout__subtotal">
              <p>Subtotal</p>
              <span>$ {totalPrice}</span>
            </div>
            <div className="cart-checkout__total">
              <p>Total</p>
              <span>$ {totalPrice}</span>
            </div>
            <Button
              className="btn-custom"
              onClick={toggleDrawer("right", true)}
            >
              Completar Compra
            </Button>
          </div>
        </div>
      </div>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
};

export default CartDetail;
