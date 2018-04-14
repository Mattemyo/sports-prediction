import api from '../api';
import { LIVE_GAMES_FETCHED } from '../actionTypes';

export const liveGamesFetched = (liveGames) => ({
  type: LIVE_GAMES_FETCHED,
  liveGames
});

export const fetchLiveGames = () => (dispatch) =>
  api.liveGames.fetchAll().then((res) => dispatch(liveGamesFetched(res.data.fixtures)));
