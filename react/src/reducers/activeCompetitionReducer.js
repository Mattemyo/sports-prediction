import { ACTIVE_COMPETITION_TABLE_FETCHED } from '../actionTypes';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case ACTIVE_COMPETITION_TABLE_FETCHED:
      return {
        table: action.table
      };
    default:
      return state;
  }
};
