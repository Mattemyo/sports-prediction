import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import liveGamesReducer from './reducers/liveGamesReducer';

export default combineReducers({
  router: routerReducer,
  liveGames: liveGamesReducer
});
