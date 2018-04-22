import React, { Component } from 'react';
import { connect } from 'react-redux';
import Palette from 'react-palette';
import {
  updateActiveGame,
  fetchActiveGameDetails,
  fetchHomeTeamDetails,
  fetchAwayTeamDetails,
  fetchActiveGamePrediction
} from '../actions/activeGameActions';
import { fetchActiveCompetitionTable } from '../actions/activeCompetitionActions';
import Rings from '../components/spinners/Rings';
import Dot from '../components/spinners/Dot';
import LeagueTable from '../components/tables/LeagueTable';
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
    loading: true,
    competitionLoading: true
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
      updateActiveGame(params.gameId);
      fetchActiveGameDetails(params.gameId).then(() => {
        const {
          activeGame: {
            fixture: {
              _links: { competiton, homeTeam, awayTeam }
            }
          }
        } = this.props;

        // Only fetch team and league details when game data has been fetched
        fetchHomeTeamDetails(
          homeTeam.href.slice(homeTeam.href.lastIndexOf('/') + 1)
        );
        fetchAwayTeamDetails(
          awayTeam.href.slice(awayTeam.href.lastIndexOf('/') + 1)
        );
        // fetch league table
        fetchActiveCompetitionTable(
          competition.href.slice(competition.href.lastIndexOf('/') + 1)
        );
      });

      // Fetch prediction simultaneously
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

    const { loading, competitionLoading } = this.state;

    return (
      <main>
        <h4>{date && formattedDate.toDateString()}</h4>
        <div className="home team">
          <div className="img-container">
            {loading ? (
              <Rings />
            ) : (
              <img
                src={homeTeamDetails ? homeTeamDetails.crestUrl : '#'}
                alt={homeTeamName}
              />
            )}
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
            {loading ? (
              <Rings />
            ) : (
              <img
                src={awayTeamDetails ? awayTeamDetails.crestUrl : '#'}
                alt={homeTeamName}
              />
            )}
          </div>
          <h4>{awayTeamName}</h4>
        </div>
        <div className="prediction">
          <h4>Prediction:</h4>
          <div className="prediction-bar">
            <Palette image={homeTeamDetails ? homeTeamDetails.crestUrl : '#'}>
              {(palette) => (
                <div
                  className="percentage"
                  style={{
                    width: `${100 * homeTeamWins}%`,
                    background:
                      palette.darkVibrant ||
                      palette.darkMuted ||
                      palette.lightMuted ||
                      palette.muted ||
                      palette.vibrant ||
                      palette.lightVibrant ||
                      'black'
                  }}
                />
              )}
            </Palette>
            {loading ? (
              <Dot />
            ) : (
              <div
                className="percentage"
                style={{ width: `${100 * draws}%`, background: 'white' }}
              />
            )}
            <Palette image={awayTeamDetails ? awayTeamDetails.crestUrl : '#'}>
              {(palette) => (
                <div
                  className="percentage"
                  style={{
                    width: `${100 * awayTeamWins}%`,
                    background:
                      palette.darkVibrant ||
                      palette.darkMuted ||
                      palette.lightMuted ||
                      palette.muted ||
                      palette.vibrant ||
                      palette.lightVibrant ||
                      'black'
                  }}
                />
              )}
            </Palette>
          </div>
        </div>
        {/* TODO: Display Competition Table */}
        <LeagueTable loading={competitionLoading} />
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
    },
    activeCompetition: {
      ...state.activeCompetition
    }
  }),
  {
    updateActiveGame,
    fetchActiveGameDetails,
    fetchHomeTeamDetails,
    fetchAwayTeamDetails,
    fetchActiveGamePrediction,
    fetchActiveCompetitionTable
  }
)(GameDetailsPage);
