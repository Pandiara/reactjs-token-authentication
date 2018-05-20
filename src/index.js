import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {App }from './containers/App';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState)

ReactDOM.render(<Provider store={store}>
    <App/>
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
