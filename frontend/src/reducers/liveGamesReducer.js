import { LIVE_GAMES_FETCHED, ACTIVE_GAME_UPDATED } from '../actionTypes';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case LIVE_GAMES_FETCHED:
      return action.liveGames;

    case ACTIVE_GAME_UPDATED:
      return { activeGameId: action.activeGameId };

    default:
      return state;
  }
};
