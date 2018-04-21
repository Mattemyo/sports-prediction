import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  updateActiveGame,
  fetchActiveGameDetails,
  fetchActiveGamePrediction
} from '../actions/activeGameActions';
import './GameDetailsPage.css';

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
      goalsAwayTeam: null,
      goalsHomeTeam: null
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
      this.setState({ loading: true });
      updateActiveGame(params.gameId);
      fetchActiveGameDetails(params.gameId);
      fetchActiveGamePrediction(params.gameId).then(() =>
        this.setState({ loading: false })
      );
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
      result: { goalsAwayTeam, goalsHomeTeam },
      _links: { competition }
    } =
      fixture || state;

    const formattedDate = new Date(date);
    console.log(fixture);

    return (
      <main>
        <div>{date && formattedDate.toDateString()}</div>
        <div className="home team">{homeTeamName}</div>
        <div className="score">
          {goalsHomeTeam} - {goalsAwayTeam}
        </div>
        <div className="away team">{awayTeamName}</div>
        <div className="prediction">
          Prediction:
          {homeTeamWins},
          {draws},
          {awayTeamWins}
        </div>
        {this.state.loading ? 'loading' : 'loaded'}
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
