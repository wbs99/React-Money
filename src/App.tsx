import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import 'index.scss';
import Layout from './components/Layout';

function App() {
  return (
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
  );
}

function NotFound() {
  return <h2>页面不存在</h2>;
}

function Money() {
  return (
    <>
      <Layout>
        <h2>记账页</h2>;
      </Layout>
    </>
  );
}

function Statistics() {
  return (
    <>
      <Layout>
        <h2>统计页</h2>;
      </Layout>
    </>
  );
}

function Tabs() {
  return (
    <>
      <Layout>
        <h2>标签页</h2>;
      </Layout>
    </>
  );
}

export default App;
