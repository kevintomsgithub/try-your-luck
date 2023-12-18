"use client";
import SquareComponent from "../square/Square";
import React, { useState, useEffect } from "react";

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

  const handleWindowClick = () => {
    // Deselect when clicking outside the squares
    setSelectedSquare(null);
  };

  return (
    <div className="h-96 p-20 mb-20">
      <div className="grid gap-4 grid-cols-2 grid-rows-2">
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
      {selectedSquare && (
        <p className="mt-4">
          Selected Square:{" "}
          <span className={`inline-block w-6 h-6 ${selectedSquare}`} />
        </p>
      )}
    </div>
  );
}
