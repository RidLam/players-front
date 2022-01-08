import { useEffect, useState } from "react";
import { getPlayerById } from "../services/Networking";

const PlayerDetails = ({
  player_id
}) => {
  const [player, setPlayer] = useState({});

  /**I could send the selected object from PlayerList component to display it here 
   * As you asked to create another API to get player by id, i did it this way
   */
  useEffect(async () => {
    if (player_id) {
      const _player = await getPlayerById(player_id);
      setPlayer(_player);
    }
  }, [player_id]);

  return(
    <>
    {/**
     * I didn't want to work on the css to display the player details to save time
     * I can do better than that
     */}
      <h3>Player details:</h3>
      {
        !player_id
        ? <div><h2>Please select a player to show details</h2></div>
        : <div>
          <p>ID: {player.id}</p>
          <p>Firstname: {player.firstname}</p>
          <p>Lastname: {player.lastname}</p>
          <p>Shortname: {player.shortname}</p>
          <p>Sex: {player.sex}</p>
        </div>

      }
    </>
  )
}

export default PlayerDetails;