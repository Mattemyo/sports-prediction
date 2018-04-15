import {
  ACTIVE_GAME_UPDATED,
  ACTIVE_GAME_DETAILS_FETCHED,
  ACTIVE_GAME_PREDICTION_FETCHED
} from '../actionTypes';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case ACTIVE_GAME_UPDATED:
      return { ...state, activeGameId: action.activeGameId };

    case ACTIVE_GAME_DETAILS_FETCHED:
      return { ...state, ...action.activeGameDetails };

    case ACTIVE_GAME_PREDICTION_FETCHED:
      return { ...state, activeGamePrediction: action.activeGamePrediction };

    default:
      return state;
  }
};
