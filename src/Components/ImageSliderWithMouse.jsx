// ImageSliderWithMouse.js
import React, { useState, useRef } from 'react';
import '../Styles/ImageSlider.css';

function ImageSliderWithMouse({ imageFileNames }) {
  const [isPaused, setPaused] = useState(false);
  const sliderRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);

  const handleMouseDown = (e) => {
    setPaused(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    if (startX !== null) {
      setPaused(false);
      setStartX(null);
    }
  };

  const handleMouseUp = () => {
    if (startX !== null) {
      setPaused(false);
      setStartX(null);
    }
  };

  const handleMouseMove = (e) => {
    if (startX === null) return;

    e.preventDefault();

    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 3; // Adjust this multiplier to control the speed of sliding
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="image-slider" ref={sliderRef} onMouseEnter={() => setPaused(true)} onMouseLeave={handleMouseLeave}>
      <div
        className={`image-carousel ${isPaused ? 'paused' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {imageFileNames.map((fileName, index) => (
          <div key={index} className="image-slide">
            <img src={`/images/${fileName}`} alt={fileName} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSliderWithMouse;
