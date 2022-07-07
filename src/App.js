import "./App.css";
import * as React from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./components/ContactPage/ContactPage";
import CartDetail from "./components/CartDetail/CartDetail";
import { CartProvider } from "./context/CartContext";
import Carrousel  from './components/Carrousel/Carrousel'
import Box2by2 from './components/Box2by2/Box2by2'
import  OutlinedCard  from './components/OutlinedSimpleCard/OutlinedSimpleCard.js'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'



function App() {
  return (
    //JSX

    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <div className="general-container">
                  <Carrousel />
                  <img src="./proxpublis.gif" className="next-publish"></img>
                  <OutlinedCard/>
                  <img src="./nuestrosrecomendados.gif" className="stared-published"></img>
                  <Box2by2 collectionName={'stared_products'}/>
                  <img src="./nuevasseries.gif" className="new-series"></img>
                  <Box2by2 collectionName={'new_series'}/>
                  <img src="./lacomiqueria_foot.gif" className="new-series"></img>
                  
                </div>
              }
            ></Route>
            <Route path="/contacto" element={<ContactPage />}></Route>
            <Route
              path="/producto/:id"
              element={<ItemDetailContainer/>}
            ></Route>
            <Route path="/cart" element={<CartDetail />}></Route>
            
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
