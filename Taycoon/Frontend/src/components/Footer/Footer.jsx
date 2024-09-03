import React from 'react';
import whatsapp from "../../assets/icons/whatsapp.svg";
import facebook from "../../assets/icons/fb.svg";
import instagram from "../../assets/icons/insta.svg";
import twitter from "../../assets/icons/x.svg";
import linkedin from "../../assets/icons/linkedin.svg";

const Footer = () => {
    return (
        <>  
            <div className="footer p-4 md:p-8 mt-5">

<div className="ft1 bg-[#464362] flex flex-col text-white gap-5 pb-5 rounded-tl-[140px]">
                    <span className='text-center text-3xl font-extrabold my-10'>Taycoon</span>

                    <div className="row  lg:h-[50vh] h-[60vh] flex flex-col lg:flex-row  mx-10 text-lg font-semibold lg:gap-44 gap-10 max-lg:justify-center max-lg:items-center">
                        
                        <div className="ft flex flex-row gap-24 w-[50%] lg:justify-end">

                            <div className="ft11 flex flex-col mb-4 md:mb-0">
                                <span className='underline cursor-pointer'>Account</span>
                                <span>Login</span>
                                <span>Sign Up</span>
                                <span>Edit Account</span>
                                <span>Conditions</span> 
                                <span>Return</span> 
                            </div>
                            <div className="ft11 flex flex-col mb-4 md:mb-0">
                                <span className='underline cursor-pointer'>Company</span>
                                <span>About</span>  
                                <span>TaycoonBlogs</span> 
                                <span>Privacy</span> 
                                <span>Policy</span> 
                                <span>Terms</span> 
                                <span>and</span> 
                                
                                
                            </div>


                        </div>
                        

                        


                        <div className="ft flex flex-row gap-24 w-[50%] lg:justify-start">

                            <div className="ft11 flex flex-col mb-4 md:mb-0">
                                
                                <span className='underline cursor-pointer'>Get Help</span>
                                <span>Bulk Orders</span>
                                <span>Policy</span> 
                                <span>Shipping</span> 
                                <span>Policy</span>
                            
                            </div>
                            
                            <div className="ft11 flex flex-col">

                                <span className='underline cursor-pointer'>Contact Us</span>
                                <div className="flex items-center gap-2">
                                    <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
                                    <span>LinkedIn</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={facebook} alt="FaceBook" className="w-6 h-6" />
                                    <span>FaceBook</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={twitter} alt="Twitter" className="w-6 h-6" />
                                    <span>Twitter</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={whatsapp} alt="Whatsapp" className="w-6 h-6" />
                                    <span>Whatsapp</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={instagram} alt="Instagram" className="w-6 h-6" />
                                    <span>Instagram</span>
                                </div>

                            </div>

                        </div>



                    </div>

                </div>

                <div className="bg-[#8883B5] flex flex-col sm:flex-row justify-between items-center rounded-br-[50px] p-4">
                    <span className='text-black text-xl md:text-3xl font-bold'>Taycoon</span>

                    <div className="flex flex-wrap gap-4 md:gap-6">
                        {/* SVG icons here */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
