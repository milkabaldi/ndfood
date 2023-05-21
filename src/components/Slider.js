import React, { useState } from 'react';

const CustomSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const slides = ['Slide 1', 'Slide 2', 'Slide 3']; // Define your slide content
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => prevIndex === 0 ? slides.length - 1 : prevIndex - 1);
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
  
    return (
      <div className=''>
        <button className='' onClick={prevSlide}>
          Previous
        </button>
        <div className=''>{slides[currentIndex]}</div>
        <button className='' onClick={nextSlide}>
          Next
        </button>
      </div>
    );
  };

  export default CustomSlider;