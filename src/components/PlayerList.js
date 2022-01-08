import { lazy, Suspense } from "react";

const PlayerCard = lazy(() => import("./PlayerCard"))

const PlayerList = ({
  players,
  setSelectedPlayerId
}) => {
  return(
    <>
      <h3>Players list</h3>
      {
        players &&
        players.map(player => {
          return(
            <Suspense fallback={<div>Loading...</div>}>
              <PlayerCard
                key={player.id}
                player={player}
                setSelectedPlayerId={setSelectedPlayerId}
              /> 
            </Suspense>
            
          )
        })
      }
    </>
  )
}
export default PlayerList;