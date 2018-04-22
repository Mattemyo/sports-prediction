import api from '../api';
import { ACTIVE_COMPETITION_TABLE_FETCHED } from '../actionTypes';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const activeCompetitionTableFetched = (data) => ({
  type: ACTIVE_COMPETITION_TABLE_FETCHED,
  table: data
});

export const fetchActiveCompetitionTable = (competitionId) => (dispatch) =>
  api.competition
    .fetchActiveCompetitionTable(competitionId)
    .then((data) =>
      delay(2000).then(() => dispatch(activeCompetitionTableFetched(data)))
    );
