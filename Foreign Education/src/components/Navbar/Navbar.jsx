import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
 
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        
        window.addEventListener("scroll", ()=>{

            window.scrollY >500 ? setSticky(true) : setSticky(false);

        })

        return(

            window.removeEventListener("scroll", ()=>{

                window.scrollY > 500 ? setSticky(true) : setSticky(false);
    
            })

        )
    
    }, [])
    
    return (
        
        <>

            <nav className={`${sticky ? 'nav-bar' : ' '}`}>

                <img className="nav-img" src={logo} alt="Logo Image" title="EduCity" />

                <ul className='nav-menu'>

                    <li>Home</li>
                    <li>Programs</li>
                    <li>About Us</li>
                    <li>Campus</li>
                    <li>Testimonials</li>
                    <li><button className='main-btn'>Contact Us</button></li>


                </ul>

            </nav>
            

        </>
    
    )
}

export default Navbar
