const PlayerCard = ({
  player,
  setSelectedPlayerId
}) => {
  return(
    <div className="player-card" onClick={() => setSelectedPlayerId(player.id)}>
      <div className="player-avatar">
        <img className="player-picture" src={player.picture} />
      </div>
      <div className="player-name">
        <h4>{`${player.firstname} ${player.lastname}`}</h4>
      </div>
      <div className="player-rank">
        <p>{`N: ${player.data.rank}`}</p>
      </div>
    </div>
  )
}

export default PlayerCard;