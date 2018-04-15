import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  updateActiveGame,
  fetchActiveGameDetails
} from '../actions/activeGameActions';

class GameDetailsPage extends Component {
  state = {
    date: '',
    status: '',
    matchday: 0,
    homeTeamName: '',
    awayTeamName: '',
    result: {
      homeTeamScore: null,
      awayTeamScore: null
    },
    loading: false
  };

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
        activeGame: { id, head2head, fixture }
      },
      state
    } = this;

    const {
      date,
      status,
      matchday,
      homeTeamName,
      awayTeamName,
      result: { homeTeamScore, awayTeamScore }
    } =
      fixture || state;

    return (
      <div>
        League {id} and {date}
        <div>
          {homeTeamName}
          {Number(Boolean(homeTeamScore))} - {Number(Boolean(awayTeamScore))}
          {awayTeamName}
        </div>
      </div>
    );
  }
}

export default connect((state) => ({ activeGame: state.activeGame }), {
  updateActiveGame,
  fetchActiveGameDetails
})(GameDetailsPage);
