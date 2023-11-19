import React, { useState } from 'react';
import '../Styles/HeroSection.css';
import '../Styles/ImageSlider.css';
import ImageSliderWithMouse from './ImageSliderWithMouse';

function HeroSection() {

  const [isPaused, setPaused] = useState(false);

  const imageFileNames = [
 
  'image2.png',
  'image3.png',
  'image6.png',
  'image7.png',
  'image8.png',
  'image9.png',
  
];

  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="text-container">
        <div className="text-group">
        <p className="header">Monolith</p>
        <h1>Test less. Learn More.</h1>
        <p>
          Spend less time running expensive, repetitive tests and more time
          learning from your engineering data to predict the exact tests to run.
        </p>
        <div className="button-container">
          <button>REQUEST DEMO</button>
          <button className="button">SPEAK TO OUR TEAM</button>
        </div>
        </div>
        </div>
      </div>
      <ImageSliderWithMouse imageFileNames={imageFileNames} />
      {/* 
      <div className="image-slider" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className={`image-carousel ${isPaused ? 'paused' : ''}`}>
        {imageFileNames.map((fileName, index) => (
          <div key={index} className="image-slide">
            <img src={`/images/${fileName}`} alt={fileName} />
          </div>
        ))}
    
      </div>
      
    </div>
    */}
    </div>
  );
}

export default HeroSection;
