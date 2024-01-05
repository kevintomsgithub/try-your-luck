import React from "react";

const SquareComponent = ({ bgColorClass, onSelect, selected }) => {
  const handleClick = () => {
    onSelect(bgColorClass);
  };

  return (
    <div
      className={`w-28 h-28 flex items-center justify-center text-center rounded-2xl drop-shadow-md duration-300 ease-in-out hover:drop-shadow-2xl cursor-pointer hover:scale-105 ${bgColorClass} ${
        selected ? "ring-offset-2 ring-4 ring-yellow-500" : ""
      }`}
      onClick={handleClick}
    />
  );
};

export default SquareComponent;
