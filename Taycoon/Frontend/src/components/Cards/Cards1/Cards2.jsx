import React from 'react'
import c11 from "../../../assets/images/c11.svg"
import { useNavigate } from 'react-router-dom'


const Cards2 = (props) => {
    

    const navigate = useNavigate();

    const handleClick = ()=>{

            navigate("/shop/product");

    }

    return (
        
        <>

            <div onClick={handleClick} className="card-container cursor-pointer flex flex-col h-fit w-[250px]  justify-center my-8 mx-4 lg:mx-10 border-gray-400 border-2 rounded-xl p-2">

                <div className="image flex items-center justify-center">

                    <img src={props.imgSrc} alt="" className='h-60 w-48' />

                </div>

                <div className="context flex flex-col  items-center justify-center">

                    <p className='text-center text-sm font-semibold'>Men’s checkered shirt green color cotton</p>
                    <div className="rating flex flex-row gap-2 text-xs">

                        <svg width="95" height="19" viewBox="0 0 95 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.5 0.242705L11.5616 6.58751L11.5784 6.63934H11.6329H18.3042L12.907 10.5606L12.8629 10.5927L12.8797 10.6445L14.9413 16.9893L9.54408 13.068L9.5 13.036L9.45592 13.068L4.0587 16.9893L6.12025 10.6445L6.13709 10.5927L6.09301 10.5606L0.695789 6.63934H7.36712H7.42161L7.43845 6.58751L9.5 0.242705Z" fill="#FFC700" stroke="black" stroke-width="0.15"/>
                        <path d="M28.5 0.242705L30.5616 6.58751L30.5784 6.63934H30.6329H37.3042L31.907 10.5606L31.8629 10.5927L31.8797 10.6445L33.9413 16.9893L28.5441 13.068L28.5 13.036L28.4559 13.068L23.0587 16.9893L25.1203 10.6445L25.1371 10.5927L25.093 10.5606L19.6958 6.63934H26.3671H26.4216L26.4384 6.58751L28.5 0.242705Z" fill="#FFC700" stroke="black" stroke-width="0.15"/>
                        <path d="M47.5 0.242705L49.5616 6.58751L49.5784 6.63934H49.6329H56.3042L50.907 10.5606L50.8629 10.5927L50.8797 10.6445L52.9413 16.9893L47.5441 13.068L47.5 13.036L47.4559 13.068L42.0587 16.9893L44.1203 10.6445L44.1371 10.5927L44.093 10.5606L38.6958 6.63934H45.3671H45.4216L45.4384 6.58751L47.5 0.242705Z" fill="#FFC700" stroke="black" stroke-width="0.15"/>
                        <path d="M66.5 0.242705L68.5616 6.58751L68.5784 6.63934H68.6329H75.3042L69.907 10.5606L69.8629 10.5927L69.8797 10.6445L71.9413 16.9893L66.5441 13.068L66.5 13.036L66.4559 13.068L61.0587 16.9893L63.1203 10.6445L63.1371 10.5927L63.093 10.5606L57.6958 6.63934H64.3671H64.4216L64.4384 6.58751L66.5 0.242705Z" fill="#E1E1E1" stroke="black" stroke-width="0.15"/>
                        <path d="M85.5 0.242705L87.5616 6.58751L87.5784 6.63934H87.6329H94.3042L88.907 10.5606L88.8629 10.5927L88.8797 10.6445L90.9413 16.9893L85.5441 13.068L85.5 13.036L85.4559 13.068L80.0587 16.9893L82.1203 10.6445L82.1371 10.5927L82.093 10.5606L76.6958 6.63934H83.3671H83.4216L83.4384 6.58751L85.5 0.242705Z" fill="#E1E1E1" stroke="black" stroke-width="0.15"/>
                        </svg>(550)

                    </div>

                    <p className='text-xs'>50+ bought in past month</p>

                    <div className="pricing flex flex-row gap-2 items-center">

                        <p className='text-[#464362] text-lg font-semibold'>₹899</p>
                        <p className='text-xs'>MRP : ₹2999 (75% off )</p>

                    </div>



                </div>


            </div>
        
        </>
    )
}

export default Cards2
