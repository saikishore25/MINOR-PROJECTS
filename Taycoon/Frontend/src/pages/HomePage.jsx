import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'
import Carousal1 from '../components/Carousals/Carousal1'

const HomePage = () => {
    
    return (
      <>

        <Navbar/>
        <Hero/>
        <Carousal1 title="New Arrival"/>
        <Carousal1 title="Most Trending"/>
        <Carousal1 title="Gen-Z"/>
        <Footer/>
        
        
      </>
    )
}

export default HomePage


/* Rectangle 69 */
