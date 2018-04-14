import {
  ACTIVE_GAME_UPDATED,
  ACTIVE_GAME_DETAILS_FETCHED
} from '../actionTypes';
import { activeGameDetailsFetched } from '../actions/activeGameActions';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case ACTIVE_GAME_UPDATED:
      return { activeGameId: action.activeGameId };

    case activeGameDetailsFetched:
      return action.activeGameDetails;

    default:
      return state;
  }
};
