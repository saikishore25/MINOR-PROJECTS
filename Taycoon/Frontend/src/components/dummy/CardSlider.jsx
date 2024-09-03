import React, { useState } from 'react';

const CardSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        { id: 1, content: 'Card 1' },
        { id: 2, content: 'Card 2' },
        { id: 3, content: 'Card 3' },
        { id: 4, content: 'Card 4' },
        { id: 5, content: 'Card 5' },
        { id: 6, content: 'Card 6' },
    ];

    const cardsPerSlide = 2; // Number of cards per slide
    const totalSlides = Math.ceil(cards.length / cardsPerSlide);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : totalSlides - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < totalSlides - 1 ? prevIndex + 1 : 0));
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-[500px] max-w-xl">
            <div className="maincontent flex items-center justify-center flex-row">
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-700"
                        style={{ transform: `translateX(-${currentIndex * (100)}%)` }}
                    >
                        {cards.map((card) => (
                            <div key={card.id} className="w-[50%] flex-shrink-0">
                                <div className="p-4 m-4 bg-white rounded-lg shadow-md">
                                    {card.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className="absolute left-0 h-10 w-10 transform items-center justify-center flex bg-gray-300 p-3 rounded-full"
                    onClick={handlePrev}
                >
                    &#8592;
                </button>
                <button
                    className="absolute right-0 h-10 w-10 transform items-center justify-center flex bg-gray-300 p-3 rounded-full"
                    onClick={handleNext}
                >
                    &#8594;
                </button>
            </div>

            <div className="flex justify-center mt-4">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 w-2 mx-1 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardSlider;
