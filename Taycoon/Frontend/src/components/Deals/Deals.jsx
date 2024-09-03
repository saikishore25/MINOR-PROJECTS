import React from 'react'
import shoe from "../../assets/images/shoe.svg"
import ss1 from "../../assets/images/ss1.svg"
import ss2 from "../../assets/images/ss2.svg"
import ss3 from "../../assets/images/ss3.svg"


const Deals = () => {
    
    return (
        <>

            <div className="deals flex max-lg:justify-center max-lg:items-center justify-start my-8 gap-10 mx-4 lg:mx-10 max-lg:h-[100vh] h-[50vh] max-lg:flex-col flex-row">


                <div className="deal1 bg-[#D6D3F4] flex max-xl:flex-col flex-row max-lg:w-[80%] w-[33%] justify-center  h-[75%] rounded-xl p-3 items-center  max-xl:gap-2 gap-5">


                    <img src={shoe} alt="" className='max-2xl:h-52 max-2xl:w-40  h-72 w-56 ' />

                    <div className="content">

                        <p className='font-semibold max-lg:text-lg'>Grey and black </p>
                        <p className='font-semibold  max-lg:text-xs'>sneakers for men </p>
                        <p className='font-bold text-xl bg-gradient-to-r from-#464362 to-#4637D0 max-lg:text-xs'>Deal of the day </p>

                        <div className='max-xl:flex-row flex-col flex'>

                            <p className='text-[#464362] font-semibold'>₹899</p>
                            <p>₹2999 (75% off )</p>

                        </div>

                    </div>

                </div>

                <div className="deal2 flex  flex-row gap-5 h-[75%] ">

                    <div className="one bg-[#D6D3F4] flex items-center justify-center  flex-col w-[75%] rounded-xl p-5 gap-2">

                        <img src={ss1} alt="" className='h-fit w-fit mt-5'/>
                        <p className='font-bold max-xl:text-lg text-xl bg-gradient-to-r from-#464362 to-#4637D0'>Deal of the day </p>
                        
                        <div className='flex-row max-md:flex-col flex justify-center  items-center gap-2'>

                            <p className='text-[#464362] font-semibold'>₹899</p>
                            <p  className='max-2xl:text-xs'>₹2999 (75% off )</p>

                        </div>

                    </div>

                    <div className="one bg-[#D6D3F4] flex items-center justify-center  flex-col w-[75%] rounded-xl p-5 gap-2">
                        
                        <img src={ss2} alt="" className=' h-fit w-fit mt-5'/>

                         <p className='font-bold max-xl:text-lg text-xl bg-gradient-to-r from-#464362 to-#4637D0'>Deal of the day </p>
                        <div className='flex-row max-md:flex-col flex justify-center  items-center gap-2'>

                            <p className='text-[#464362] font-semibold'>₹899</p>
                            <p className='max-2xl:text-xs'>₹2999 (75% off )</p>

                        </div>

                    </div>

                    <div className="one bg-[#D6D3F4] flex items-center justify-center flex-col w-[75%] rounded-xl p-5 gap-2">
                        
                        <img src={ss3} alt="" className='h-fit w-fit mt-5'/>

                        <p className='font-bold max-xl:text-lg text-xl bg-gradient-to-r from-#464362 to-#4637D0'>Deal of the day </p>
                        <div className='flex-row max-md:flex-col flex justify-center  items-center gap-2'>

                            <p className='text-[#464362] font-semibold'>₹899</p>
                            <p className='max-2xl:text-xs'>₹2999 (75% off )</p>

                        </div>

                    </div>

                </div>
            </div>

            <div className='flex w-full h-5 items-center justify-center  '>

                <div className='bg-gray-300  flex w-[95%] rounded-lg h-[2px]'> </div>


            </div>
        
        </>
    )
}

export default Deals
