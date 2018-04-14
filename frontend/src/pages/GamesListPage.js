import React, { Component } from 'react';
import Link from 'react-router-dom';
import GameListItems from '../components/listItems/GamesListItems';

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
        this.setState({ liveGames: data.fixtures.slice(1, 10) });
      });
  };

  render() {
    return (
      <div>
        hello
        <div>{this.state.liveGames.map((game) => <GameListItems game={game} />)}</div>
      </div>
    );
  }
}
