import { hot } from 'react-hot-loader';
import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';

import Sidebar from './Sidebar';
import Header from './Header';
import Content from './Content';
import Dashboard from './Dashboard';

import './styles.css';

import { CodeBlock } from './markdown/CodeBlock';

const components = {
  h1: (props: any) => <h1 style={{ color: 'tomato' }} {...props} />,
  pre: (props: any) => <div {...props} />,
  code: CodeBlock,
};

let files: string[] = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
];

const pages = files.reduce((p: any, filename, index, fullArray) => {
  let exercise = require(`./exercises/${filename}`);
  Object.assign(exercise, {
    previous: fullArray[index - 1],
    next: fullArray[index + 1],
  });
  exercise = {
    ...exercise,
    previous: fullArray[index - 1],
    next: fullArray[index + 1],
  };
  p[filename] = {
    exercise,
    title: exercise.default.title,
  };
  return p;
}, {});

const filesAndTitles = files.map(filename => ({
  title: pages[filename].title,
  filename,
}));

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <div className='container'>
          <React.Fragment>
            <Sidebar filesAndTitles={filesAndTitles} />
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Content>
                <Route
                  exact
                  path='/:id'
                  render={props => {
                    // get the id from the url
                    const { id } = props.match.params;
                    // get my component from pages
                    const {
                      exercise: { default: Exercise },
                    } = pages[id];
                    return (
                      <div className='content'>
                        <div className='title'>{pages[id].title}.</div>
                        <MDXProvider components={components}>
                          <Exercise />
                        </MDXProvider>
                      </div>
                    );
                  }}
                />
              </Content>
            </Switch>
          </React.Fragment>
        </div>
      </React.Fragment>
    </Router>
  );
}
export default hot(module)(App);
