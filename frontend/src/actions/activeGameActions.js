import api from '../api';
import {
  LIVE_GAMES_FETCHED,
  ACTIVE_GAME_UPDATED,
  ACTIVE_GAME_DETAILS_FETCHED,
  ACTIVE_GAME_PREDICTION_FETCHED
} from '../actionTypes';

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

export const activeGamePredictionFetched = (data) => ({
  type: ACTIVE_GAME_PREDICTION_FETCHED,
  activeGamePrediction: data
});

export const fetchActiveGamePrediction = (gameId) => (dispatch) =>
  api.liveGames
    .fetchActiveGamePrediction(gameId)
    .then((data) => dispatch(activeGamePredictionFetched(data)));
