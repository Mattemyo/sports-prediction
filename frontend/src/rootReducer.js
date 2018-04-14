import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import liveGamesReducer from './reducers/liveGamesReducer';
import activeGameReducer from './reducers/activeGameReducer';

export default combineReducers({
  router: routerReducer,
  liveGames: liveGamesReducer,
  activeGame: activeGameReducer
});
