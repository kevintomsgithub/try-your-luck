import Navbar from "./components/navbar/Navbar";
import Settings from "./components/settings/Settings";
import Game from "./components/game/Game";
import LoadingBar from "./components/loading/Loading";
import BidComponent from "./components/bid/Bid";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      {/* <LoadingBar /> */}
      <Settings />
      <Game />
      <BidComponent />
    </main>
  );
}
