import * as React from 'react';
import { hot } from 'react-hot-loader';
import Sidebar from './Sidebar';
import { Content } from './Content';

function App() {
  return (
    <div>
      <Sidebar />
      <Content compiler="Typescript" framework="React" />
    </div>
  );
}
export default hot(module)(App);
