import React from 'react';

const PlayerList = ({ players, removePlayer }) => (
  <div>
    <h3>Players</h3>
    <ul className="player-list">
      {players.map((player) => {
        return (
          <li key={player.membershipId}>
            <i className={`fab fa-${player.consoleType} console-icon`}></i>
            {player.displayName}
            <span onClick={removePlayer(player.displayName)}>
              <i className="fas fa-trash-alt delete-icon"></i>
            </span>
          </li>
        )
      })}
    </ul>
  </div>
);

export default PlayerList;