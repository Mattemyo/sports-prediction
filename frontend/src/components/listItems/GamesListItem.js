import React from 'react';
import { Link } from 'react-router-dom';

export default ({
  game: {
    status,
    homeTeamName,
    awayTeamName,
    date,
    result: { goalsHomeTeam, goalsAwayTeam },
    _links: { self: { href } }
  }
}) => {
  const gameId = href.substr(href.lastIndexOf('/') + 1);
  const formattedDate = date;

  return (
    <div>
      <h5>{href}</h5>
      <h5>
        {homeTeamName} - {awayTeamName}
      </h5>
      <h6>
        {Number(goalsHomeTeam)} - {Number(goalsAwayTeam)}
      </h6>
      <p>{formattedDate}</p>
      <div>Status: {status}</div>
      <div>Game Id: {gameId}</div>
      <Link to={`/livegame/${gameId}`}>Click Here </Link>
    </div>
  );
};
