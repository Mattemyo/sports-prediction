import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  );
};

registerServiceWorker();

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
