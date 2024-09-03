import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import CategoriesMenu from '../components/CategoriesMenu/CategoriesMenu'
import Deals from '../components/Deals/Deals'
// import Cards2 from '../components/Cards/Cards1/Cards2'
import Carousal2 from '../components/Carousals/Carousal2'

const ShopPage = () => {
  return (
    <>

        <Navbar/>
        <CategoriesMenu/>
        <Deals/>
        <Carousal2 title="Highly Rated"/>
        <Carousal2 title="Most Purchased"/>
        <Footer/>
      
    </>
  )
}

export default ShopPage
