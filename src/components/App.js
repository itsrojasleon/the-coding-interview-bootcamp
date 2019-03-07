import React from 'react';
import { hot } from 'react-hot-loader';
import Sidebar from './Sidebar';
import Content from './Content';

function App() {
  return (
    <div>
      <Sidebar />
      <Content />
    </div>
  );
}
export default hot(module)(App);
