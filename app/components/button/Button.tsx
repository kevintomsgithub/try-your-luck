import React from "react";

const Button: React.FC = ({ text, onClick }) => {
  return (
    <button type="button" onClick={onClick} className="w-28 h-10 rounded-xl border border-gray-400 mx-10 hover:bg-gray-300 duration-300 ease-in-out">
      {text}
    </button>
  );
};

export default Button;
