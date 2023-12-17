export default function Game() {
  return (
    <div className="h-96 bg-gray-300 pt-20">
      <div className="grid gap-4 grid-cols-2 grid-rows-2">
        <div className="bg-pink-500 w-36 h-24 flex items-center justify-center text-center rounded-2xl" />
        <div className="bg-blue-500 w-36 h-24 flex items-center justify-center text-center rounded-2xl" />
        <div className="bg-cyan-500 w-36 h-24 flex items-center justify-center text-center rounded-2xl" />
        <div className="bg-violet-500 w-36 h-24 flex items-center justify-center text-center rounded-2xl" />
      </div>
    </div>
  );
}
