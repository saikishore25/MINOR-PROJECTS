import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import search_icon from "../../assets/icons/search.svg";
import like_icon from "../../assets/icons/like.svg";
import account_icon from "../../assets/icons/account.svg";
import cart_icon from "../../assets/icons/cart.svg";

const Navbar = () => {

  const [MenuOpen,setMenuOpen ] = useState(false);

  const onMenuClick= ()=>{


  }


  return(

  
    <div className="flex justify-center my-8 mx-4 lg:mx-10">

      
      
      <div className="navbar flex  flex-row items-center justify-between bg-[#464362] h-auto lg:h-16 w-full p-4 rounded-xl">

        <div className="title flex flex-row gap-3 items-center justify-center">

          <svg className='md:hidden ' xmlns="http://www.w3.org/2000/svg"  height="30px" width="30px" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" fill='white'/></svg>
            
          <span className="text-white text-2xl font-extrabold   cursor-pointer">Taycoon</span>


        </div>
        
       
        <div className="nav-options flex  max-md:hidden md:flex-row items-center justify-center gap-10  w-[40%] ">
          
          <Link className="text-white hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-gray-500" to="/">Home</Link>
          <Link className="text-white hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-gray-500" to="/shop">Shop</Link>
          <Link className="text-white hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-gray-500" to="/categories">Categories</Link>
        
        </div>

        <div className="nav-icons hidden  sm:items-center sm:flex sm:justify-end sm:gap-12 sm:mr-8  lg:w-[25%] ">
          
          <img src={search_icon} alt="Search" className="h-5 cursor-pointer" />
          <img src={like_icon} alt="Like" className="h-5 cursor-pointer" />
          <img src={cart_icon} alt="Cart" className="h-5 cursor-pointer" />
          <img src={account_icon} alt="Account" className="h-5 cursor-pointer" />
        
        </div>

        <img src={account_icon} alt="Account" className="h-5 cursor-pointer hidden max-sm:flex" />


      </div>

    </div>


  );
};

export default Navbar;
