import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import liveGamesReducer from './reducers/liveGamesReducer';
import activeGameReducer from './reducers/activeGameReducer';
import activeCompetitionReducer from './reducers/activeCompetitionReducer';

export default combineReducers({
  router: routerReducer,
  liveGames: liveGamesReducer,
  activeGame: activeGameReducer,
  activeCompetition: activeCompetitionReducer
});
