import Navbar from "./components/navbar/Navbar";
import Game from "./components/game/Game";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <Game />
    </main>
  );
}
