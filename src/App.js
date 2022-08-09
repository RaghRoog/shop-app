import React from "react";
import { useState } from "react";
import {BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom'
import style from './styles/main.css'
import Home from "./components/Home";
import Shop from "./components/Shop";
import Nav from "./components/Nav"
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {

  const [product, setProduct] = useState('')
  const sendProductToParent = (data) => {
    setProduct(data)
  }

  return (
    <HashRouter>
      <Nav/>
      <Cart/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop sendProductToParent={sendProductToParent}/>}/>
        <Route path='/shop/:product' element={<Product product={product}/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
