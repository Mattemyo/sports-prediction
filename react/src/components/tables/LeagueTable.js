import React from 'react';
import { connect } from 'react-redux';
import './LeagueTable.css';

const LeagueTable = ({ loading, activeCompetition }) => (
  <div className="table grid">
    <h2>{!loading && activeCompetition.table.leagueCaption}</h2>
    {!loading &&
      activeCompetition.table.standing.map((team) => (
        <div key={team}>
          <h4>{team.position}</h4>
          <h4>{team.teamName}</h4>
          <img src={team.crestURI} alt={team.teamName} />
          <h4>{team.playedGames}</h4>
          <h4>{team.goalDifference}</h4>
          <h4>{team.points}</h4>
        </div>
      ))}
  </div>
);

export default connect(
  (state) => ({ activeCompetition: state.activeCompetition }),
  {}
)(LeagueTable);
