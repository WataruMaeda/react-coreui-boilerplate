import './common/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// disable ServiceWorker
// import registerServiceWorker from './common/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// disable ServiceWorker
// registerServiceWorker();
