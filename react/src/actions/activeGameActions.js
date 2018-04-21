import api from '../api';
import {
  LIVE_GAMES_FETCHED,
  ACTIVE_GAME_UPDATED,
  ACTIVE_GAME_DETAILS_FETCHED,
  ACTIVE_GAME_PREDICTION_FETCHED,
  HOME_TEAM_DETAILS_FETCHED,
  AWAY_TEAM_DETAILS_FETCHED
} from '../actionTypes';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const updateActiveGame = (activeGameId) => ({
  type: ACTIVE_GAME_UPDATED,
  activeGameId
});

export const activeGameDetailsFetched = (data) => ({
  type: ACTIVE_GAME_DETAILS_FETCHED,
  activeGameDetails: data
});

export const fetchActiveGameDetails = (gameId) => (dispatch) =>
  api.liveGames
    .fetchActiveGameDetails(gameId)
    .then((data) => dispatch(activeGameDetailsFetched(data)));

export const homeTeamDetailsFetched = (data) => ({
  type: HOME_TEAM_DETAILS_FETCHED,
  homeTeamDetails: data
});

export const fetchHomeTeamDetails = (homeTeamId) => (dispatch) =>
  api.liveGames
    .fetchHomeTeamDetails(homeTeamId)
    .then((data) => dispatch(homeTeamDetailsFetched(data)));

export const awayTeamDetailsFetched = (data) => ({
  type: AWAY_TEAM_DETAILS_FETCHED,
  awayTeamDetails: data
});

export const fetchAwayTeamDetails = (awayTeamId) => (dispatch) =>
  api.liveGames
    .fetchAwayTeamDetails(awayTeamId)
    .then((data) => dispatch(awayTeamDetailsFetched(data)));

export const activeGamePredictionFetched = (data) => ({
  type: ACTIVE_GAME_PREDICTION_FETCHED,
  activeGamePrediction: data
});

export const fetchActiveGamePrediction = (gameId) => (dispatch) =>
  api.liveGames.fetchActiveGamePrediction(gameId).then((data) =>
    delay(2000).then(() => {
      dispatch(activeGamePredictionFetched(data));
    })
  );
