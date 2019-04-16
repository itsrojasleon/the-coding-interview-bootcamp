import '@babel/polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import DefaultErrorBoundary from './components/DefaultErrorBoundary';
import './index.css';

ReactDOM.render(
  <DefaultErrorBoundary>
    <App />
  </DefaultErrorBoundary>,
  document.getElementById('app')
);
