import '@babel/polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import DefaultErrorBoundary from './components/DefaultErrorBoundary';
import './index.css';

if (process.env.NODE_ENV !== 'production') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <DefaultErrorBoundary>
    <App />
  </DefaultErrorBoundary>,
  document.getElementById('app')
);
