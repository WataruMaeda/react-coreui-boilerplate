import './common/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';
// disable ServiceWorker
// import registerServiceWorker from './common/registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
// disable ServiceWorker
// registerServiceWorker();
