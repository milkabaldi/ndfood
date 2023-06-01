import React, { useEffect, useState } from 'react';

export const CustomSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const fetchSlides = async () => {
        const response = await fetch('/api/slider');
        const data = await response.json();
        setCurrentIndex(data);
      };
  
      fetchSlides();
    }, []);
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => prevIndex === 0 ? slides.length - 1 : prevIndex - 1);
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
  
    return (
      <div>
        <h1>Custom Slider</h1>
        <button onClick={prevSlide}>Previous</button>
        {slides && slides.length > 0 && (
          <div>
            {slides[currentIndex] &&
              Object.entries(slides[currentIndex]).map(([key, value]) => (
                <img key={key} src={value} alt={key} />
              ))}
          </div>
        )}
        <button onClick={nextSlide}>Next</button>
      </div>
    );
  };

