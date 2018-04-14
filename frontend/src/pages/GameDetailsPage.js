import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateActiveGame } from '../actions/liveGamesActions';

class GameDetailsPage extends Component {
  componentWillMount = () => {
    const {
      props: {
        match: { params },
        updateActiveGame
      }
    } = this;

    if (params && params.gameId) {
      updateActiveGame(params.gameId);
    }
  };

  render() {
    const {
      props: {
        activeGame: { gameId }
      }
    } = this;

    return <div>detailss {gameId}</div>;
  }
}

export default connect((state) => ({ activeGame: state.activeGame }), {
  updateActiveGame
})(GameDetailsPage);
