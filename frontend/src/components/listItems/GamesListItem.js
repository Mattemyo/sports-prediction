import React from 'react';
import { Link } from 'react-router-dom';

export default ({
  game: {
    status,
    homeTeamName,
    awayTeamName,
    result: { goalsHomeTeam, goalsAwayTeam },
    _links: { self: { href } }
  }
}) => {
  const gameId = href.substr(href.lastIndexOf('/') + 1);

  return (
    <div>
      <h5>{href}</h5>
      <h5>
        {homeTeamName} - {awayTeamName}
      </h5>
      <h6>
        {Number(goalsHomeTeam)} - {Number(goalsAwayTeam)}
      </h6>
      <div>Status: {status}</div>
      <div>Game Id: {gameId}</div>
      <Link to={`/livegame/${gameId}`}>Click Here </Link>
    </div>
  );
};
