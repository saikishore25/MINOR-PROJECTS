import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CategoriesPage from './pages/CategoriesPage';
import ProductOverviewPage from './pages/ProductOverviewPage';

function App() {
  return (

    <>
    {/* <Navbar/> */}
      
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/shop/product" element={<ProductOverviewPage/>}/>
      
      </Routes>
      </>

  );
}

export default App;
