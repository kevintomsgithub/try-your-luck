"use client";
import React, { useEffect, useState } from "react";
import Button from "../buttons/Button";

const BidComponent = ({
  koins,
  selectedSquare,
  clearSelection,
  setBidAmount,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [sliderValue, setSliderValue] = useState(50);

  useEffect(() => {
    setBidAmount(selectedOption);
  }, [selectedOption]);

  const handleOptionClick = (amount) => {
    const clampedAmount = Math.min(amount, 1000); // Clamp to 1000
    setSelectedOption(clampedAmount);
    setSliderValue(clampedAmount / 10);
  };

  const handleSliderChange = (event) => {
    const newValue = Math.min(Number(event.target.value), 100); // Restrict to positive values below 100
    setSliderValue(newValue);
    setSelectedOption(Math.round(newValue * 10));
  };

  const handleClearClick = () => {
    setSelectedOption(null);
    setSliderValue(0);
    clearSelection(); // Callback to clear selection in Game component
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg mt-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Select Bid Amount:{" "}
          <span className={`inline-block w-6 h-6 ${selectedSquare}`} />
        </h2>
        <div className="flex space-x-4">
          <Button
            text="$10"
            onClick={() => handleOptionClick(10)}
            selected={selectedOption === 10}
          />
          <Button
            text="$100"
            onClick={() => handleOptionClick(100)}
            selected={selectedOption === 100}
          />
          <Button
            text="$500"
            onClick={() => handleOptionClick(500)}
            selected={selectedOption === 500}
          />
          <Button
            text="$1000"
            onClick={() => handleOptionClick(1000)}
            selected={selectedOption === 1000}
          />
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Adjust Bid Amount with Slider:
        </h2>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
          className="w-full h-8 rounded-full bg-gray-300 appearance-none focus:outline-none focus:shadow-outline"
        />
        <p className="mt-4">
          Selected Amount: $
          <input
            type="number"
            value={selectedOption || ""}
            onChange={(e) => {
              const newValue = Math.min(
                Math.max(Number(e.target.value), 0), // Restrict to positive values
                koins // Restrict to values below koins
              );
              setSelectedOption(newValue);
              setSliderValue(newValue / 10);
            }}
            className="border border-gray-400 px-2 py-1 rounded-md ml-2"
          />
        </p>
      </div>
      <div className="mt-4">
        <Button text="Clear" onClick={handleClearClick} />
        <Button text="Lock" />
      </div>
    </div>
  );
};

export default BidComponent;
