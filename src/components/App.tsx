import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Sidebar from './Sidebar';
import Content from './Content';

import './styles.css';

let files: string[] = ['01', '02', '03', '04', '05'];

const pages = files.reduce((p: any, filename, index, fullArray) => {
  let exercise = require(`./exercises/${filename}`);
  Object.assign(exercise, {
    previous: fullArray[index - 1],
    next: fullArray[index + 1]
  });
  exercise = {
    ...exercise,
    previous: fullArray[index - 1],
    next: fullArray[index + 1]
  };
  p[filename] = {
    exercise,
    title: exercise.Title
  };
  return p;
}, {});

const filesAndTitles = files.map(filename => ({
  title: pages[filename].title,
  filename
}));

function Home() {
  return <div>Home component</div>;
}

function App() {
  return (
    <div className="container">
      <Router>
        <React.Fragment>
          <Sidebar filesAndTitles={filesAndTitles} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Content>
              <Route
                exact
                path="/:id"
                render={props => {
                  const { id } = props.match.params;
                  return <div>{pages[id].title}</div>;
                }}
              />
            </Content>
          </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
}
export default hot(module)(App);
