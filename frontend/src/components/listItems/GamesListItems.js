import React from 'react';

export default ({ game }) => (
  <div>
    <h5>{game._links.competition.href}</h5>
    <h5>
      {game.homeTeamName} - {game.awayTeamName}
    </h5>
    <h6>
      {Number(game.result.goalsHomeTeam)} - {Number(game.result.goalsAwayTeam)}
    </h6>
    <div>Status: {game.status}</div>
    <div>Game Id: {game.homeTeam}</div>
  </div>
);
