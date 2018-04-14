import api from '../api';
import {
  LIVE_GAMES_FETCHED,
  ACTIVE_GAME_UPDATED,
  ACTIVE_GAME_DETAILS_FETCHED
} from '../actionTypes';

export const updateActiveGame = (activeGameId) => ({
  type: ACTIVE_GAME_UPDATED,
  activeGameId
});

export const activeGameDetailsFetched = (gameId) => ({
  type: ACTIVE_GAME_DETAILS_FETCHED,
  gameId
});

export const fetchActiveGameDetails = (gameId) => (dispatch) =>
  api.liveGames
    .fetchActiveGameDetails(gameId)
    .then((res) => dispatch(liveGamesFetched(res.data)));
