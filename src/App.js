import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

//importing components
import { Header } from './components/Header';
import { ProductDetails } from './components/ProductDetails';
import { Products } from './components/Products';
import { Home } from './components/Home';
import { ProductIndex } from './components/ProductIndex';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        
        <Route path="products" element={<Products/>}>
          <Route path="/" element={<ProductIndex />}></Route>
          <Route path=":productId" element={<ProductDetails />}></Route>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
