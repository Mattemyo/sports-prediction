import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import items from './reducers/items';

export default combineReducers({
  // items,
  router: routerReducer
});
