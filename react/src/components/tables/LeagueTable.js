import React from 'react';
import { connect } from 'react-redux';
import Rings from '../spinners/Rings';
import './LeagueTable.css';

const LeagueTable = ({ activeCompetition }) => (
  <div className="table grid">
    <h1>{activeCompetition.table.leagueCaption}</h1>
    {activeCompetition.table.standing && (
      <div className="league-row labels grid">
        <h3 className="position">#</h3>
        <h3 className="spacer" />
        <h3>Team</h3>
        <h3>GP</h3>
        <h3>+ / -</h3>
        <h3>P</h3>
      </div>
    )}
    <div className="standing grid">
      {activeCompetition &&
        activeCompetition.table.standing.map((team) => (
          <div className="listed-team league-row grid" key={team.teamName}>
            <h1 className="position">{team.position}</h1>
            <div className="img-container-small">
              <img src={team.crestURI} alt={team.teamName} />
            </div>
            <h4 className="team-name">{team.teamName}</h4>
            <h4 className="played-games">{team.playedGames}</h4>
            <h4 className="goal-diff">{team.goalDifference}</h4>
            <h4 className="points">
              <strong>{team.points}</strong>
            </h4>
          </div>
        ))}
    </div>
  </div>
);

export default connect(
  (state) => ({ activeCompetition: state.activeCompetition }),
  {}
)(LeagueTable);
