"use client";
import React, { useState } from "react";

const BidComponent = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [sliderValue, setSliderValue] = useState(50); // Default value for the slider

  const handleOptionClick = (amount) => {
    setSelectedOption(amount);
  };

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div>
      <div>
        <h2>Select Bid Amount:</h2>
        <div>
          <button
            className={`bg-blue-500 px-4 py-2 mr-2 ${
              selectedOption === 10 ? "text-white" : "text-black"
            }`}
            onClick={() => handleOptionClick(10)}
          >
            $10
          </button>
          <button
            className={`bg-blue-500 px-4 py-2 mr-2 ${
              selectedOption === 100 ? "text-white" : "text-black"
            }`}
            onClick={() => handleOptionClick(100)}
          >
            $100
          </button>
          <button
            className={`bg-blue-500 px-4 py-2 mr-2 ${
              selectedOption === 500 ? "text-white" : "text-black"
            }`}
            onClick={() => handleOptionClick(500)}
          >
            $500
          </button>
          <button
            className={`bg-blue-500 px-4 py-2 ${
              selectedOption === 1000 ? "text-white" : "text-black"
            }`}
            onClick={() => handleOptionClick(1000)}
          >
            $1000
          </button>
        </div>
      </div>
      <div>
        <h2>Adjust Bid Amount with Slider:</h2>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
          className="w-full"
        />
        <p>Selected Amount: ${(sliderValue * 10).toFixed(0)}</p>
      </div>
    </div>
  );
};

export default BidComponent;
