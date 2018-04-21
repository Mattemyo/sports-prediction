import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  updateActiveGame,
  fetchActiveGameDetails,
  fetchHomeTeamDetails,
  fetchAwayTeamDetails,
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
        fetchActiveGamePrediction,
        fetchHomeTeamDetails,
        fetchAwayTeamDetails
      }
    } = this;

    if (params && params.gameId) {
      this.setState({ loading: true });
      updateActiveGame(params.gameId);
      fetchActiveGameDetails(params.gameId).then(() => {
        const {
          activeGame: {
            fixture: {
              _links: { homeTeam, awayTeam }
            }
          }
        } = this.props;

        fetchHomeTeamDetails(
          homeTeam.href.slice(homeTeam.href.lastIndexOf('/') + 1)
        );
        fetchAwayTeamDetails(
          awayTeam.href.slice(awayTeam.href.lastIndexOf('/') + 1)
        );
      });
      fetchActiveGamePrediction(params.gameId).then(() =>
        this.setState({ loading: false })
      );
    }
  };

  render() {
    const {
      props: {
        activeGame: {
          activeGameId,
          head2head,
          fixture,
          homeTeamDetails,
          awayTeamDetails
        }
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
        <h4>{date && formattedDate.toDateString()}</h4>
        <div className="home team">
          <div className="img-container">
            <img
              src={homeTeamDetails ? homeTeamDetails.crestUrl : '#'}
              alt={homeTeamName}
            />
          </div>
          <h4>{homeTeamName}</h4>
        </div>
        <div className="score">
          <h2>
            {goalsHomeTeam} - {goalsAwayTeam}
          </h2>
        </div>
        <div className="away team">
          <div className="img-container">
            <img
              src={awayTeamDetails ? awayTeamDetails.crestUrl : '#'}
              alt={homeTeamName}
            />
          </div>
          <h4>{awayTeamName}</h4>
        </div>
        <div className="prediction">
          <h4>Prediction:</h4>
          <div className="prediction-bar">
            <div
              style={{ width: `${100 * homeTeamWins}%`, background: 'blue' }}
            />
            <div style={{ width: `${100 * draws}%`, background: 'green' }} />
            <div
              style={{ width: `${100 * awayTeamWins}%`, background: 'yellow' }}
            />
          </div>
        </div>
        {this.state.loading ? 'loading' : 'loaded'}
      </main>
    );
  }
}

export default connect(
  (state) => ({
    activeGame: {
      ...state.activeGame,
      ...state.homeTeam,
      ...state.homeTeam
    }
  }),
  {
    updateActiveGame,
    fetchActiveGameDetails,
    fetchHomeTeamDetails,
    fetchAwayTeamDetails,
    fetchActiveGamePrediction
  }
)(GameDetailsPage);
