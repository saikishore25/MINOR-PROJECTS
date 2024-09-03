import React, { useRef } from 'react';
import c11 from "../../assets/images/c11.svg";
import c12 from "../../assets/images/c12.svg";
import c13 from "../../assets/images/c13.svg";
import c14 from "../../assets/images/c14.svg";
import c15 from "../../assets/images/c15.svg";
import Cards2 from '../Cards/Cards1/Cards2';

const Carousal2 = (props) => {
  const arr = [c11, c12, c13, c14, c15, c11, c12, c13, c14, c15];
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -250, // Adjust this value to scroll by the width of one card
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 250, // Adjust this value to scroll by the width of one card
      behavior: 'smooth',
    });
  };

  return (

    <>
    
        <p className='text-center font-bold text-2xl'>{props.title}</p>
        <div className="relative  flex items-center justify-center  mx-4 lg:mx-10">
        <button
            onClick={scrollLeft}
            className="absolute left-[10%] top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 z-10"
        >
            &lt;
        </button>
        <div
            className="flex overflow-hidden scrollbar-hide space-x-2 w-full" // Adjust space-x-2 to control gap
            ref={sliderRef}
            style={{ width: 'calc(250px * 5 + 8px * 4)' }} // 5 cards + 4 gaps (adjust gap as needed)
        >
            {arr.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-[250px]">
                <Cards2 imgSrc={item} />
            </div>
            ))}
        </div>
        <button
            onClick={scrollRight}
            className="absolute right-[10%] top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 z-10"
        >
            &gt;
        </button>

        </div>

        <div className='flex w-full items-center justify-center  '>

             <div className='bg-gray-300  flex w-[95%] rounded-lg h-[2px]'> </div>
                

        </div>
    
    
    </>


  );
};

export default Carousal2;
