import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  selected?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, selected }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`mx-3 px-5 py-2 text-sm rounded-xl border hover:bg-gray-300 duration-300 ease-in-out ${
        selected ? "bg-gray-300" : "border-gray-400"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
