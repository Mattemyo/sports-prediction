import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ConnectedRouter, routerMiddleware, connectRouter } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import rootReducer from './rootReducer';

export const history = createBrowserHistory();

const middleware = applyMiddleware(
  thunk,
  routerMiddleware(history) // for dispatching history actions
  // ... other middlewares ...
);

export default createStore(
  connectRouter(history)(rootReducer),
  rootReducer, // new root reducer with router stat
  composeWithDevTools(middleware)
);
