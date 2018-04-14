import React, { Component } from 'react';
import Link from 'react-router-dom';
import { connect } from 'react-redux';
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
          game._links.competition.href.slice(game._links.competition.href.lastIndexOf('/') + 1)
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
      <div>
        <h1 className="col-6-3">BPL </h1>
        <div>{sortAndDisplayGames(filterGames(liveGames, 445))}</div>
        <h1>La Liga</h1>
        <div>
          {liveGames && sortAndDisplayGames(filterGames(liveGames, 455))}
          <h1>Bundesligaa</h1>
          <div>{liveGames && sortAndDisplayGames(filterGames(liveGames, 452))}</div>
        </div>
      </div>
    );
  }
}

export default connect((state) => (state.liveGames ? { liveGames: state.liveGames } : {}), {
  fetchLiveGames
})(GamesListPage);
