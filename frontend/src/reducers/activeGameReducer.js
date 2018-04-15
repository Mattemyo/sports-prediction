import {
  ACTIVE_GAME_UPDATED,
  ACTIVE_GAME_DETAILS_FETCHED
} from '../actionTypes';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case ACTIVE_GAME_UPDATED:
      return { ...state, id: action.activeGameId };

    case ACTIVE_GAME_DETAILS_FETCHED:
      return { ...state, ...action.activeGameDetails };

    default:
      return state;
  }
};
