import * as React from 'react';
import { hot } from 'react-hot-loader';
import Sidebar from './Sidebar';
import Content from './Content';

import './styles.css';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Content>
        <div>Hello</div>
      </Content>
    </div>
  );
}
export default hot(module)(App);
