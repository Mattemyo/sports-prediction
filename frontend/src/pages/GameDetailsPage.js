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
    _links: {
      competition: {}
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
      result: { homeTeamScore, awayTeamScore },
      _links: { competition }
    } =
      fixture || state;

    return (
      <div>
        <a href={competition.href} target="_blank">
          League {id}
        </a>{' '}
        and {date}
        <div>
          {homeTeamName}
          {homeTeamScore} - {awayTeamScore}
          {awayTeamName}
          <div>Prediction: my prediction</div>
        </div>
      </div>
    );
  }
}

export default connect((state) => ({ activeGame: state.activeGame }), {
  updateActiveGame,
  fetchActiveGameDetails
})(GameDetailsPage);
