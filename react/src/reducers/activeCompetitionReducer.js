import { ACTIVE_COMPETITION_FETCHED } from '../actionTypes';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case ACTIVE_COMPETITION_FETCHED:
      return { ...state, activeCompetition: action.activeCompetition };
    default:
      return state;
  }
};
