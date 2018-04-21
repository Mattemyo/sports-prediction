import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  updateActiveGame,
  fetchActiveGameDetails,
  fetchActiveGamePrediction
} from '../actions/activeGameActions';

class GameDetailsPage extends Component {
  state = {
    activeGamePrediction: {
      homeTeamWins: 0,
      draws: 0,
      awayTeamWins: 0
    },
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
        fetchActiveGameDetails,
        fetchActiveGamePrediction
      }
    } = this;

    if (params && params.gameId) {
      updateActiveGame(params.gameId);
      fetchActiveGameDetails(params.gameId);
      fetchActiveGamePrediction(params.gameId);
    }
  };

  render() {
    const {
      props: {
        activeGame: { activeGameId, head2head, fixture }
      },
      state
    } = this;
    const { homeTeamWins, draws, awayTeamWins } =
      this.props.activeGame.activeGamePrediction || state.activeGamePrediction;

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
      <main>
        <a href={competition.href} target="_blank">
          League {activeGameId}
        </a>
        and {date}
        <div>
          {homeTeamName}
          {homeTeamScore} - {awayTeamScore}
          {awayTeamName}
          <div>
            Prediction:
            {homeTeamWins},
            {draws},
            {awayTeamWins}
          </div>
        </div>
      </main>
    );
  }
}

export default connect(
  (state) => ({
    activeGame: state.activeGame
  }),
  {
    updateActiveGame,
    fetchActiveGameDetails,
    fetchActiveGamePrediction
  }
)(GameDetailsPage);
