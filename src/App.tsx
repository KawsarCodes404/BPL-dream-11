import { Suspense, useState } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Players from "./components/players/Players";
import type { Iplayer } from "./types/player";


const playersFetch = async (): Promise<Iplayer[]> => {

  const res = await fetch('/data.json')
  const data = await res.json();

  return data;
}


function App() {
  // const playersPromise = playersFetch();

  const [playersPromise] = useState(() => playersFetch());

  const [coin, setcoin] = useState(2500);  // It's like a variable !

  return (
    <>
      <Nav coin = {coin} />

      <Banner />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Players playersPromise={playersPromise} coin={coin} setcoin={setcoin} />
      </Suspense>
    </>
  )
}

export default App
