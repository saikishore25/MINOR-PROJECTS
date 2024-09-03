import React from 'react'
import s1 from "../../assets/images/s1.svg"
import s2 from "../../assets/images/s2.svg"
import s3 from "../../assets/images/s3.svg"
import s4 from "../../assets/images/s4.svg"
import s5 from "../../assets/images/s5.svg"
import s6 from "../../assets/images/s6.svg"
import s7 from "../../assets/images/s7.svg"

const CategoriesMenu = () => {
    
    return (
        <>

            <div className="categoriesmenu flex flex-row gap-5  justify-start max-lg:justify-center my-8 mx-4 lg:mx-10">

                <div className="ct-menu">

                    <img src={s1} alt="" className='h-20 w-20'/>

                </div>
                <div className="ct-menu">

                    <img src={s2} alt="" className='h-20 w-20'/>

                </div>
                <div className="ct-menu">

                    <img src={s3} alt=""className='h-20 w-20' />

                </div>
                <div className="ct-menu">

                    <img src={s4} alt="" className='h-20 w-20'/>

                </div>
                <div className="ct-menu">

                    <img src={s5} alt="" className='h-20 w-20'/>

                </div>
                <div className="ct-menu">

                    <img src={s6} alt=""className='h-20 w-20' />

                </div>
                <div className="ct-menu">

                    <img src={s7} alt="" className='h-20 w-20'/>

                </div>

            </div>
        
        </>
    )
}

export default CategoriesMenu
