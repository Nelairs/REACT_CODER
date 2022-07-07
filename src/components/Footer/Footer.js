import * as React from "react";
import "./Footer.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <AppBar position="static" className="footer-primary">
      <Toolbar>
        <div className="footer-container-logo">
          <Link to={"/"}>
            <img src="./logo_ivrea_cut.png" alt="" />
          </Link>
        </div>
        <ul className="footer">
          <li>
            <p>MAS INFORMACION</p>
                <ul className="more-info">
                    <li><p>Cambios</p></li>
                    <li><p>Cómo comprar</p></li>
                    <li><p>Contacto</p></li>
                    <li><p>Preguntas frecuentes</p></li>
                    <li><p>Quiénes somos</p></li>
                    <li><p>¿Cómo uso mi Giftcard?</p></li>
                </ul>
          </li>
          <li>
            <div className="multi-images">
              <p>MEDIOS DE PAGO</p>
              <img src="./footer_imgs/amex@2x.png" alt=""></img>
              <img src="./footer_imgs/argencard@2x.png" alt=""></img>
              <img src="./footer_imgs/banelco@2x.png" alt=""></img>
              <img src="./footer_imgs/cabal@2x.png" alt=""></img>
              <img src="./footer_imgs/diners@2x.png" alt=""></img>
              <img src="./footer_imgs/mastercard@2x.png" alt=""></img>
              <img src="./footer_imgs/mercadopago@2x.png" alt=""></img>
              <img src="./footer_imgs/pagofacil@2x.png" alt=""></img>
              <img src="./footer_imgs/rapipago@2x.png" alt=""></img>
              <img src="./footer_imgs/tarjeta-naranja@2x.png" alt=""></img>
              <img src="./footer_imgs/tarjeta-shopping@2x.png" alt=""></img>
              <img src="./footer_imgs/visa@2x.png" alt=""></img>

              <p className="ship">FORMAS DE ENVIO</p>
              <img src="./footer_imgs/oca@2x.png" alt=""></img>
            </div>
          </li>
          <li>
            <p>CONTACTANOS</p>
                <ul className="more-info">
                    <li><p>Contacto lectores</p></li>
                    <li><p>Contacto para verder nuestas publicaciones</p></li>
                    <li><p>Contacto para trabajar en Ivrea</p></li>
                </ul>
            <p>REDES SOCIALES</p>
            <div className="multi-images-social">
                <a href="https://www.facebook.com/ivreality/" target="_blank"><img src="./footer_imgs/facebook_icon.png" alt=""></img></a>
                <a href="https://www.instagram.com/ivrea.ar/" target="_blank"><img src="./footer_imgs/instagram_icon.png" alt=""></img></a>
                <a href="https://twitter.com/ivreality" target="_blank"><img src="./footer_imgs/twitter_bird_icon.png" alt=""></img></a>
                <a href="https://www.ivreality.com.ar" target="_blank"><img src="./footer_imgs/blogger_google_blog_icon.png" alt=""></img></a>
            </div>

          </li>
          <li className="legal">
            <p>INFORMACION LEGAL</p>
            <a href="https://serviciosweb.afip.gob.ar" target="_blank">
              <img src="./footer_imgs/DATAWEB.jpg" alt=""></img>
            </a> 
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
