import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  updateActiveGame,
  fetchActiveGameDetails
} from '../actions/activeGameActions';

class GameDetailsPage extends Component {
  componentDidMount = () => {
    const {
      props: {
        match: { params },
        updateActiveGame,
        fetchActiveGameDetails
      }
    } = this;

    if (params && params.gameId) {
      updateActiveGame(params.gameId);
      fetchActiveGameDetails(params.gameId);
    }
  };

  render() {
    const {
      props: {
        activeGame: { activeGameId }
      }
    } = this;

    return <div>detailss {activeGameId}</div>;
  }
}

export default connect((state) => ({ activeGame: state.activeGame }), {
  updateActiveGame,
  fetchActiveGameDetails
})(GameDetailsPage);
