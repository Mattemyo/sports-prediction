import api from '../api';
import { ACTIVE_COMPETITION_TABLE_FETCHED } from '../actionTypes';

export const activeCompetitionTableFetched = (data) => ({
  type: ACTIVE_COMPETITION_TABLE_FETCHED,
  activeCompetition: data
});

export const fetchActiveCompetitionTable = (competitionId) => (dispatch) =>
  api.competition
    .fetchActiveCompetitionTable(competitionId)
    .then((data) =>
      delay(2000).then(() => dispatch(activeCompetitionTableFetched(data)))
    );
