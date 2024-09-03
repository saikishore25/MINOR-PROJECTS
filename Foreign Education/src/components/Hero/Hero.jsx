import React from 'react'
import './Hero.css';
import darkarrow from '../../assets/dark-arrow.png';


const Hero = () => {
    
    return (
        
        <>

            <div className="hero">

                <div className="hero-text">

                    <h1>We ensure better education for better world</h1>
                    <p>Our cutting-edge curriculum is designed to empower students with knowledge, skills and experience needed to excel in the dynamic field of education</p>
                    
                    <button className='main-btn'>Explore More <img src={darkarrow} alt="" /></button>
                    
                </div>

            </div>


        
        </>
    )
}

export default Hero
