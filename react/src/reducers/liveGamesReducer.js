import {
  LIVE_GAMES_FETCHED,
  ACTIVE_GAME_UPDATED,
  ACTIVE_GAME_DETAILS_FETCHED
} from '../actionTypes';

export default (state = {}, action = {}) => {
  switch (action.type) {
    
    case LIVE_GAMES_FETCHED:
      return action.liveGames;

  
    default:
      return state;
  }
};
