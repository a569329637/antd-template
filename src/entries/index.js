import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Router, Route } from 'react-router';

import './index.css';

import TestPage from '../views/test/test1/startup';
import TestPage2 from '../views/test/test2/startup';
import ErrorPage from '../views/error/show/startup';

function App() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={TestPage} />
      <Route path="/test1" component={TestPage} />
      <Route path="/test2" component={TestPage2} />
      <Route path="/error" component={ErrorPage} />
      <Route path="*" component={ErrorPage} />
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
