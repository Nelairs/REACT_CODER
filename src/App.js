import "./App.css";
import * as React from "react";
import NavBar from "./components/NavBar/NavBar";
import CardList from "./components/CardList/CardList";
import MsgContainer from "./components/MsgContainer/MsgContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./components/ContactPage/ContactPage";

function App() {
  return (
    //JSX

    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="general-container">
                <MsgContainer message={"Bienvenidos a la pagina!"} />
                <CardList title={"Productos Recomendados"} />
              </div>
            }
          ></Route>
          <Route path="/contacto" element={<ContactPage />}></Route>
          <Route  path="/producto/:id"  element={<ContactPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
