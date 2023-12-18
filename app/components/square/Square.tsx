const SquareComponent = ({ bgColorClass, onSelect, selected }) => {
  const handleClick = () => {
    onSelect(bgColorClass);
  };

  return (
    <div
      className={`w-36 h-36 flex items-center justify-center text-center rounded-2xl drop-shadow-md duration-300 ease-in-out hover:drop-shadow-2xl cursor-pointer hover:scale-105 ${bgColorClass} ${
        selected ? "border-4 border-yellow-500" : ""
      }`}
      onClick={handleClick}
    >
      Square
    </div>
  );
};

export default SquareComponent;
