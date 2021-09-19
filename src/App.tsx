import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import 'index.scss';
import Money from './views/Money';
import Tabs from './views/Tabs';
import Statistics from './views/Statistics';
import NotFound from './views/NotFound';
import styled from 'styled-components';

const AppWrapper = styled.div`
  color: #333;
`

function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route path="/tabs">
            <Tabs/>
          </Route>
          <Route path="/money">
            <Money/>
          </Route>
          <Route path="/statistics">
            <Statistics/>
          </Route>
          <Route exact path="/">
            <Redirect to="/money"/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;
