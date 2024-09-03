import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import program_1 from '../src/assets/program-1.png'
import program_2 from '../src/assets/program-2.png'
import program_3 from '../src/assets/program-3.png' 
import Program from './components/Program/Program';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';

function App() {
  
  return(
    
    <>
      
      <Navbar></Navbar>
      <Hero></Hero>
      <Title subtitle="Our PROGRAM" title="What we Offer" ></Title>
      <Program image1={program_1} image2={program_2} image3={program_3}/>
      <About></About>
      <Title subtitle="Gallery" title="Campus Photos" ></Title>
      <Campus></Campus>
      <Title subtitle="Testimonials" title="What Students Say" ></Title>
      <Testimonials></Testimonials>
      <Title title="Get In Touch" subtitle="Contact Us" ></Title>
      <Contact></Contact>

      
         
       
   
    </>
  )
}

export default App
