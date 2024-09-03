import React, { useState, useEffect } from 'react';
import cr1 from '../../assets/images/cr1.svg';
import cr2 from '../../assets/images/cr2.svg';
import cr3 from '../../assets/images/cr3.svg';
import cr4 from '../../assets/images/cr4.svg';
import Cards1 from '../Cards/Cards1/Cards1';

const Carousal1 = (props) => {
    const images = [cr1, cr2, cr3, cr4, cr1, cr2, cr3, cr4, cr1, cr2, cr3, cr4, cr1, cr2, cr3, cr4];
    const [startIndex, setStartIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(5);

    useEffect(() => {
        const updateItemsToShow = () => {
            if (window.innerWidth < 640) {
                setItemsToShow(1);
            } else if (window.innerWidth < 1024) {
                setItemsToShow(3);
            } else {
                setItemsToShow(5);
            }
        };

        updateItemsToShow();
        window.addEventListener('resize', updateItemsToShow);

        return () => window.removeEventListener('resize', updateItemsToShow);
    }, []);

    const totalItems = images.length;

    const handlePrevious = () => {
        setStartIndex((prevIndex) => (prevIndex === 0 ? totalItems - itemsToShow : prevIndex - itemsToShow));
    };

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + itemsToShow >= totalItems ? 0 : prevIndex + itemsToShow));
    };

    return (
        <>
            <div className="title flex items-center justify-center mb-4">
                <p className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#464362]">{props.title}</p>
            </div>

            <div className="relative h-[40vh] md:h-[50vh] lg:h-[65vh] flex items-center justify-center">
                <button
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 md:p-3 rounded-full focus:outline-none z-10"
                    onClick={handlePrevious}
                >
                    &lt;
                </button>
                <div className="carousal flex overflow-hidden w-full h-full">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${startIndex * (100 / itemsToShow)}%)` }}
                    >
                        {images.map((value, index) => (
                            <Cards1 src={value} key={index} />
                        ))}
                    </div>
                </div>
                <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 md:p-3 rounded-full focus:outline-none z-10"
                    onClick={handleNext}
                >
                    &gt;
                </button>
            </div>

            <div className="flex items-center justify-center mt-2">
                {images.slice(0, Math.ceil(totalItems / itemsToShow)).map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${index === Math.floor(startIndex / itemsToShow) ? 'bg-gray-800' : 'bg-gray-400'}`}
                        onClick={() => setStartIndex(index * itemsToShow)}
                    />
                ))}
            </div>

            <div className="flex items-center justify-end mb-10 cursor-pointer">
                <div className="showmore bg-[#BDB9E2] rounded-xl w-fit p-2">
                    <span className="font-semibold text-[#464362]">View All &gt;</span>
                </div>
            </div>
        </>
    );
};

export default Carousal1;
