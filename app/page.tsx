import Navbar from "./components/navbar/Navbar";
import Settings from "./components/settings/Settings";
import Game from "./components/game/Game";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <Settings />
      <Game />
    </main>
  );
}
