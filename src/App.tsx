import React from "react";

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "index.scss";
import styled from "styled-components";

const Wrapper = styled.div`
  outline: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  border: 1px solid green;
  flex-grow: 1;
  overflow: auto;
`;

const Nav = styled.div`
  > ul {
    display: flex;
    > li {
      width: 33.33333%;
      text-align: center;
      padding: 16px;
      border: 1px solid red;
    }
  }
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

        <Nav>
          <ul>
            <li>
              <Link to="/tabs">标签页</Link>
            </li>
            <li>
              <Link to="/money">记账页</Link>
            </li>
            <li>
              <Link to="/statistics">统计页</Link>
            </li>
          </ul>
        </Nav>
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
