import React, { Component } from 'react';
import Link from 'react-router-dom';
import { connect } from 'react-redux';
import { Paper } from 'material-ui/Paper';
import GamesListItem from '../components/listItems/GamesListItem';
import { fetchLiveGames } from '../actions/liveGamesActions';

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

  filterGames = (games, competitionId) =>
    games.filter(
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
        <div>
          <h3>Today's Games</h3>
        </div>
        <div className="all-games">
          <div className="competition-live">
            <h2>BPL </h2>
            {sortAndDisplayGames(filterGames(liveGames, 445))}
          </div>
          <div className="competition-live">
            <h2>La Liga</h2>
            {sortAndDisplayGames(filterGames(liveGames, 455))}
          </div>

          <div className="competition-live">
            <h2>Bundesliga</h2>
            {sortAndDisplayGames(filterGames(liveGames, 452))}
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
