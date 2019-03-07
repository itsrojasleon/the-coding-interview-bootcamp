import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import DefaultErrorBoundary from './components/DefaultErrorBoundary';
import './styles.css';

if (process.env.NODE_ENV !== 'production') {
  var axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <DefaultErrorBoundary>
    <App />
  </DefaultErrorBoundary>,
  document.getElementById('app')
);
