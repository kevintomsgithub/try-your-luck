"use client";
import SquareComponent from "../square/Square";
import React, { useState, useEffect, useRef } from "react";
import BidComponent from "../bid/Bid";
import Settings from "../settings/Settings";
import LoadingBar from "../loading/Loading";

export default function Game() {
  const [koins, setKoins] = useState(800);
  const [bidAmount, setBidAmount] = useState(50);
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [selectedSquareIndex, setSelectedSquareIndex] = useState(null); // New state for the selected square index

  const bidAmountRef = useRef(bidAmount);

  useEffect(() => {
    bidAmountRef.current = bidAmount;
  }, [bidAmount]);

  const handleSquareSelect = (bgColorClass, squareIndex) => {
    if (selectedSquare === bgColorClass) {
      setSelectedSquare(null);
      setSelectedSquareIndex(null);
    } else {
      setSelectedSquare(bgColorClass);
      setSelectedSquareIndex(squareIndex);
    }
  };

  const handleClearSelection = () => {
    setSelectedSquare(null);
    setSelectedSquareIndex(null);
  };

  const runBid = () => {
    setKoins((currKoins) => currKoins + bidAmountRef.current);
  };

  return (
    <div>
      <LoadingBar runBid={runBid} />
      <Settings koins={koins} />
      <div className="p-20 mb-20 flex flex-col justify-center items-center">
        <div className="grid gap-6 grid-cols-2 grid-rows-2">
          <SquareComponent
            bgColorClass="bg-pink-500"
            onSelect={(bgColorClass) => handleSquareSelect(bgColorClass, 0)}
            selected={selectedSquare === "bg-pink-500"}
          />
          <SquareComponent
            bgColorClass="bg-blue-500"
            onSelect={(bgColorClass) => handleSquareSelect(bgColorClass, 1)}
            selected={selectedSquare === "bg-blue-500"}
          />
          <SquareComponent
            bgColorClass="bg-cyan-500"
            onSelect={(bgColorClass) => handleSquareSelect(bgColorClass, 2)}
            selected={selectedSquare === "bg-cyan-500"}
          />
          <SquareComponent
            bgColorClass="bg-violet-500"
            onSelect={(bgColorClass) => handleSquareSelect(bgColorClass, 3)}
            selected={selectedSquare === "bg-violet-500"}
          />
        </div>
        <BidComponent
          koins={koins}
          selectedSquare={selectedSquare}
          clearSelection={handleClearSelection}
          setBidAmount={setBidAmount}
        />
      </div>
    </div>
  );
}
