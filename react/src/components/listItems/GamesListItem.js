import React from 'react';
import { Link } from 'react-router-dom';

export default ({
  game: {
    status,
    homeTeamName,
    awayTeamName,
    date,
    result: { goalsHomeTeam, goalsAwayTeam },
    _links: {
      self: { href }
    }
  }
}) => {
  const gameId = href.substr(href.lastIndexOf('/') + 1);
  const formattedDate = date;

  return (
    <div>
      <Link to={`/livegame/${gameId}`}>
        <h5>
          {homeTeamName}{' '}
          <span>
            {goalsHomeTeam} - {goalsAwayTeam}
          </span>{' '}
          {awayTeamName}
        </h5>
      </Link>
    </div>
  );
};
