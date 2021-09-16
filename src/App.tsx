import React from "react";

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "index.scss";
import styled from "styled-components";
import Nav from "components/Nav";

const Wrapper = styled.div`
  outline: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route path="/tabs">
              <Tabs />
            </Route>
            <Route path="/money">
              <Money />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Route exact path="/">
              <Redirect to="/money" />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Main>
        <Nav></Nav>
      </Wrapper>
    </Router>
  );
}
function NotFound() {
  return <h2>页面不存在</h2>;
}

function Money() {
  return <h2>记账页</h2>;
}

function Statistics() {
  return <h2>统计页</h2>;
}

function Tabs() {
  return <h2>标签页</h2>;
}

export default App;
