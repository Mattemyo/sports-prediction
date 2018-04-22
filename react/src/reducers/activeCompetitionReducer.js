import { ACTIVE_COMPETITION_TABLE_FETCHED } from '../actionTypes';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case ACTIVE_COMPETITION_TABLE_FETCHED:
      return {
        ...state,
        activeCompetition: {
          ...state.activeCompetition,
          activeCompetitionTable: action.activeCompetitionTable
        }
      };
    default:
      return state;
  }
};
