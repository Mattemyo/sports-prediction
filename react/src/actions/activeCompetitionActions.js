import api from '../api';
import { ACTIVE_COMPETITION_FETCHED } from '../actionTypes';

export const activeCompetitionFetched = (data) => ({
  type: ACTIVE_COMPETITION_FETCHED,
  activeCompetition: data
});

export const fetchActiveCompetition = (competitionId) => (dispatch) =>
  api.competition
    .fetchActiveCompetition(competitionId)
    .then((data) =>
      delay(2000).then(() => dispatch(activeCompetitionFetched(data)))
    );
