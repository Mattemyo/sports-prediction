import api from '../api';
import { LIVE_GAMES_FETCHED, ACTIVE_GAME_UPDATED } from '../actionTypes';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const liveGamesFetched = (liveGames) => ({
  type: LIVE_GAMES_FETCHED,
  liveGames
});

export const fetchLiveGames = () => (dispatch) =>
  api.liveGames
    .fetchAll()
    .then((data) =>
      delay(2000).then(() => dispatch(liveGamesFetched(data.fixtures)))
    );
