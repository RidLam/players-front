import react, { lazy, Suspense, useEffect, useState } from "react";
import { getAllPlayers } from "./services/Networking";

import './App.css';

const PlayerList = lazy(() => import("./components/PlayerList"));
const PlayerDetails = lazy(() => import("./components/PlayerDetails"))

const App = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayerId, setSelectedPlayerId] = useState();

  useEffect(async () => {
    const _players = await getAllPlayers();
    setPlayers(_players);
  }, []);

  return (
    <div className="container">
      <div className="player-list">
        <Suspense fallback={<div>Loading...</div>}>
          <PlayerList
            players={players}
            setSelectedPlayerId={setSelectedPlayerId}
          />
        </Suspense>
      </div>
      <div className="player-details">
        <Suspense fallback={<div>Loading...</div>}>
          <PlayerDetails
            player_id={selectedPlayerId}
          />
        </Suspense>
      </div>
    </div>
  )
}

export default App;