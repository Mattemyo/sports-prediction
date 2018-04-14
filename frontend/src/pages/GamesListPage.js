import React, { Component } from 'react';
import Link from 'react-router-dom';
import GamesListItem from '../components/listItems/GamesListItem';

export default class GameListPage extends Component {
  state = {
    liveGames: []
  };

  componentWillMount() {
    this.getTodaysGames();
  }

  getTodaysGames = () => {
    fetch('http://127.0.0.1:8000/api/livegames')
      .then((response) => response.json())
      .then((data) => {
        console.table(data);
        this.setState({ liveGames: data.fixtures.slice(1) });
      });
  };

  filterCompetition = (games, competitionId) =>
    games.filter(
      (game) =>
        Number(
          game._links.competition.href.slice(game._links.competition.href.lastIndexOf('/') + 1)
        ) === competitionId
    );

  sortAndDisplayGames = (competition) =>
    competition &&
    competition
      .sort((a, b) => a.date < b.date)
      .map((game) => <GamesListItem game={game} key={game._links.self.href} />);

  render() {
    const { filterCompetition, sortAndDisplayGames, state: { liveGames } } = this;

    const BPLGames = filterCompetition(liveGames, 445);
    const LaLigaGames = filterCompetition(liveGames, 455);
    const BundesligaGames = filterCompetition(liveGames, 452);

    return (
      <div>
        <h1>BPL</h1>
        <div>{sortAndDisplayGames(BPLGames)}</div>
        <h1>La Liga</h1>
        <div>
          {sortAndDisplayGames(LaLigaGames)}
          <h1>Bundesliga</h1>
          <div>{sortAndDisplayGames(BundesligaGames)}</div>
        </div>
      </div>
    );
  }
}
