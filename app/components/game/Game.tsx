"use client";
import SquareComponent from "../square/Square";
import React, { useState, useEffect, useRef } from "react";
import BidComponent from "../bid/Bid";
import Settings from "../settings/Settings";
import LoadingBar from "../loading/Loading";

export default function Game() {
  const [koins, setKoins] = useState(800);
  const [bidAmount, setBidAmount] = useState(50);
  const [isFrozen, setIsFrozen] = useState(false);
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [lastWinSquareIndex, setLastWinSquareIndex] = useState(null);
  const [selectedSquareIndex, setSelectedSquareIndex] = useState(null); // New state for the selected square index

  const squareBgColors = [
    "bg-pink-500",
    "bg-blue-500",
    "bg-cyan-500",
    "bg-violet-500",
  ];

  const bidAmountRef = useRef(bidAmount);
  const selectedSquareIndexRef = useRef(selectedSquareIndex);

  useEffect(() => {
    bidAmountRef.current = bidAmount;
  }, [bidAmount]);
  useEffect(() => {
    selectedSquareIndexRef.current = selectedSquareIndex;
  }, [selectedSquareIndex]);

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

  function getRandomNumber() {
    return Math.floor(Math.random() * 5); // Generates a random integer between 0 and 4 (inclusive)
  }

  const runBid = () => {
    const winningSquareIndex = getRandomNumber();
    setLastWinSquareIndex(winningSquareIndex);
    console.log("---------------");
    console.log(` winningSquareIndex: ${winningSquareIndex}`);
    console.log(`selectedSquareIndex: ${selectedSquareIndexRef.current}`);
    if (selectedSquareIndexRef.current === winningSquareIndex) {
      setKoins((currKoins) => currKoins + bidAmountRef.current);
    }
    setIsFrozen(false);
  };

  return (
    <div className="my-24 font-mono">
      <LoadingBar runBid={runBid} />
      <Settings />
      <h1 className="w-full text-center py-4 font-bold">Koins 💰{koins}</h1>
      <div className="mb-15 flex flex-col justify-center items-center">
        <div className="grid gap-6 grid-cols-2 grid-rows-2">
          <SquareComponent
            bgColorClass={squareBgColors[0]}
            onSelect={(bgColorClass) => handleSquareSelect(bgColorClass, 0)}
            selected={selectedSquareIndex === 0}
          />
          <SquareComponent
            bgColorClass={squareBgColors[1]}
            onSelect={(bgColorClass) => handleSquareSelect(bgColorClass, 1)}
            selected={selectedSquareIndex === 1}
          />
          <SquareComponent
            bgColorClass={squareBgColors[2]}
            onSelect={(bgColorClass) => handleSquareSelect(bgColorClass, 2)}
            selected={selectedSquareIndex === 2}
          />
          <SquareComponent
            bgColorClass={squareBgColors[3]}
            onSelect={(bgColorClass) => handleSquareSelect(bgColorClass, 3)}
            selected={selectedSquareIndex === 3}
          />
        </div>
      </div>
      <h1 className="text-center py-5">
        Last Win Square -{" "}
        <span
          className={`inline-block w-5 h-5 ml-3 ${squareBgColors[lastWinSquareIndex]}`}
        />
      </h1>
      <BidComponent
        koins={koins}
        selectedSquare={selectedSquare}
        clearSelection={handleClearSelection}
        setBidAmount={setBidAmount}
        isFrozen={isFrozen}
        setIsFrozen={setIsFrozen}
      />
    </div>
  );
}
