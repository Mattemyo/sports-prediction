import React, { Component } from 'react';
import Link from 'react-router-dom';
import { connect } from 'react-redux';
import GamesListItem from '../components/listItems/GamesListItem';
import { fetchLiveGames } from '../actions/liveGamesActions';
import './GamesListPage.css';

class GamesListPage extends Component {
  state = {
    competitions: {
      BPLGames: [],
      LaLigaGames: [],
      BundesligaGames: []
    },
    loading: true
  };

  componentDidMount() {
    this.props.fetchLiveGames();
  }

  filterGames = (competitionId) =>
    Array.from(this.props.liveGames).filter(
      (game) =>
        Number(
          game._links.competition.href.slice(
            game._links.competition.href.lastIndexOf('/') + 1
          )
        ) === competitionId
    );

  sortAndDisplayGames = (competition) =>
    competition
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .map((game) => <GamesListItem game={game} key={game._links.self.href} />);

  render() {
    const { filterGames, sortAndDisplayGames, props } = this;
    const liveGames = Array.from(props.liveGames);

    return (
      <main className="todays-games">
        <div className="big-img">big image here!</div>
        <div class="page-title">
          <h2>Today's Games</h2>
          <hr />
          <br />
        </div>
        <div className="all-games">
          <div className="competition-live">
            <h2>BPL </h2>
            <hr className="league-title" />
            {sortAndDisplayGames(filterGames(445))}
          </div>
          <div className="competition-live">
            <h2>La Liga</h2>
            <hr className="league-title" />
            {sortAndDisplayGames(filterGames(455))}
          </div>

          <div className="competition-live">
            <h2>Bundesliga</h2>
            <hr className="league-title" />
            {sortAndDisplayGames(filterGames(452))}
          </div>
        </div>
      </main>
    );
  }
}

export default connect(
  (state) => (state.liveGames ? { liveGames: state.liveGames } : {}),
  {
    fetchLiveGames
  }
)(GamesListPage);
