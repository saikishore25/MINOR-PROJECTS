import React from 'react'
import mainhoodie from "../../assets/images/mainhoodie.svg"
import sidehoodie1 from "../../assets/images/sidehoodie1.svg"
import sidehoodie2 from "../../assets/images/sidehoodie2.svg"
import search_icon from "../../assets/icons/search.svg"

const Hero = () => {
    
    return (
        
        <>  

            <div className="hero flex  flex-row max-md:flex-col items-center justify-center  max-lg:gap-10 gap-36">

                <div className="hero1  w-[70%] flex items-center justify-center flex-col gap-10 ">

                    <div className="text1  text-5xl font-bold text-gray-700 items-center justify-center flex flex-col flex-nowrap">

                        <p className='text-3xl w-[100%] text-center'>Edit your elegance</p>
                        <p className='text-center max-md:text-7xl'>Tailored for YOU</p>

                    </div>

                    <div className="text2 items-center justify-center flex flex-col ">

                        <p className='text-center max:'>Unveil Your Style: Shop Sophisticated Menswear for</p>
                        <p  className='text-center'> Every Occasion, Right at Your Fingertips.</p>
                    
                    </div>

                    <div className="search-bar  flex lg:flex-col flex-row items-center justify-between  w-[70%] lg:w-[80%] lg:gap-10  gap-5 ">

                        <div className="search rounded-3xl border-gray-700 shadow-xl bg-white flex flex-row items-center justify-between w-[100%] p-1">

                            <input type="text" className="outline-none mx-3  p-2" placeholder='Looking for something?    '/>
                            <svg className='mr-5' width="20" height="25" viewBox="0 0 25 25" fill="#ffff" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.9488 4.75497C15.2156 4.00851 14.3416 3.41465 13.3774 3.00768C12.4132 2.60071 11.3778 2.38869 10.3312 2.38389C9.28451 2.37908 8.24727 2.58157 7.27936 2.97967C6.31145 3.37777 5.43204 3.96358 4.69194 4.70327C3.95183 5.44297 3.36569 6.32188 2.96737 7.28925C2.56905 8.25662 2.36645 9.29328 2.37126 10.3394C2.37606 11.3854 2.58819 12.4202 2.99539 13.3839C3.40259 14.3475 3.99678 15.221 4.74366 15.9539C6.23421 17.4165 8.24233 18.2316 10.3312 18.222C12.42 18.2125 14.4205 17.3789 15.8976 15.9027C17.3746 14.4264 18.2087 12.427 18.2183 10.3394C18.2279 8.25169 17.4122 6.24469 15.9488 4.75497ZM3.01998 3.03225C4.8885 1.16523 7.40008 0.0821452 10.0411 0.00448384C12.6821 -0.0731775 15.2531 0.860449 17.2282 2.61444C19.2033 4.36844 20.4334 6.81029 20.6669 9.44065C20.9004 12.071 20.1197 14.6912 18.4844 16.7653L25 23.2773L23.2763 25L16.7607 18.488C14.6847 20.1164 12.0654 20.8918 9.43693 20.6562C6.80851 20.4205 4.36906 19.1915 2.61621 17.2199C0.863357 15.2482 -0.0708369 12.6825 0.00419341 10.0461C0.0792237 7.40963 1.15782 4.90112 3.01998 3.03225Z" fill="black"/>
                            </svg>

                        </div>

                        <div className="button bg-gradient-to-r from-[#464362] to-[#343247] flex flex-row  max-lg:rounded-full w-[30%] h-12 text-white items-center justify-center rounded-3xl max-lg:gap-1 gap-5 cursor-pointer">

                           <p className='max-lg:hidden'> Shop Now </p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='h-5 w-5 '><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" fill='white'/></svg>
                            

                        </div>

                    </div>


                </div>


                <div className="hero w-[35%] flex items-center justify-center flex-row gap-10 mr-10 ">

                    <div className="mainhoodie rounded-md ">


                        <img src={mainhoodie} alt="" className='max-lg:h-80 max-lg:w-72'/>

                    </div>

                    <div className="sidehoodie">

                        <img src={mainhoodie} alt="" className='h-20 w-20'/>
                        <img src={sidehoodie2} alt="" className='h-20 w-20'/>
                        <img src={sidehoodie1} alt="" className='h-20 w-20'/>
                    </div>


                </div>


            </div>

            <div className="texter flex items-center justify-center max-lg:mt-10">

                <p className='text-[#777485] font-semibold'>Free shipping for orders  ₹499 and above</p>

            </div>

            <div className='flex w-[100%] items-center justify-center mt-5 lg:mt-14 mb-5'>

                <div className='bg-gray-300  flex w-[95%] rounded-lg h-[2px]'> </div>
                

            </div>

        
        </>
    )
}

export default Hero