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
        console.table(data.fixtures.slice(1, 10));
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

  displayGames = (competition) =>
    competition &&
    competition.map((game) => <GamesListItem game={game} key={game._links.self.href} />);

  render() {
    const { filterCompetition, displayGames, state: { liveGames } } = this;

    const BPLGames = filterCompetition(liveGames, 445);
    const LaLigaGames = filterCompetition(liveGames, 455);
    const BundesligaGames = filterCompetition(liveGames, 452);

    return (
      <div>
        <h1>BPL</h1>
        <div>{displayGames(BPLGames)}</div>
        <h1>La Liga</h1>
        <div>
          {displayGames(LaLigaGames)}
          <h1>Bundesliga</h1>
          <div>{displayGames(BundesligaGames)}</div>
        </div>
      </div>
    );
  }
}
