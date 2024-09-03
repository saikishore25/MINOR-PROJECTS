import React from 'react';

const Cards1 = ({ src }) => {
    return (
        <div className="card-container flex-shrink-0 p-3 bg-[#F7F8F9] border border-gray-300 rounded-3xl">
            <div className="image-area relative h-48 sm:h-64 lg:h-96">
                <img src={src} alt="Product" className="w-full h-full object-cover rounded-3xl" />
            </div>
            <div className="text-area mt-4 mb-4 text-center p-2">
                <p className="text-sm sm:text-base md:text-lg font-semibold text-[#464362]">Blue and White Cotton Shirt</p>
                <p className="text-xs sm:text-sm md:text-base text-[#464362] mb-5">
                    MRP: $399 <span className="line-through text-red-500">$1130</span>
                </p>
            </div>
        </div>
    );
};

export default Cards1;
