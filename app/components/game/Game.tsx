"use client";
import SquareComponent from "../square/Square";
import React, { useState, useEffect } from "react";
import BidComponent from "../bid/Bid";

export default function Game() {
  const [selectedSquare, setSelectedSquare] = useState(null);

  const handleSquareSelect = (bgColorClass: any) => {
    if (selectedSquare === bgColorClass) {
      // Deselect if the square is already selected
      setSelectedSquare(null);
    } else {
      // Select the clicked square
      setSelectedSquare(bgColorClass);
    }
  };

  const handleClearSelection = () => {
    setSelectedSquare(null);
  };

  return (
    <div className="p-20 mb-20 flex flex-col justify-center items-center">
      <div className="grid gap-6 grid-cols-2 grid-rows-2">
        <SquareComponent
          bgColorClass="bg-pink-500"
          onSelect={handleSquareSelect}
          selected={selectedSquare === "bg-pink-500"}
        />
        <SquareComponent
          bgColorClass="bg-blue-500"
          onSelect={handleSquareSelect}
          selected={selectedSquare === "bg-blue-500"}
        />
        <SquareComponent
          bgColorClass="bg-cyan-500"
          onSelect={handleSquareSelect}
          selected={selectedSquare === "bg-cyan-500"}
        />
        <SquareComponent
          bgColorClass="bg-violet-500"
          onSelect={handleSquareSelect}
          selected={selectedSquare === "bg-violet-500"}
        />
      </div>
      <BidComponent
        selectedSquare={selectedSquare}
        clearSelection={handleClearSelection}
      />
    </div>
  );
}
