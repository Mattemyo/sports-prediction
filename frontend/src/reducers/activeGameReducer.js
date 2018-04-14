import { ACTIVE_GAME_UPDATED } from '../actionTypes';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case ACTIVE_GAME_UPDATED:
      return { activeGameId: action.activeGameId };
    default:
      return state;
  }
};
