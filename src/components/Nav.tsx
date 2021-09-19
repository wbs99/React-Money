import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Icon from "./Icon";

const NavWrapper = styled.nav`
  line-height: 22px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;

    > li {
      width: 33.33333%;
      text-align: center;

      > a {
        padding: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;

        > .icon {
          width: 24px;
          height: 24px;
        }
        &.selected {
          color: #e73d32;
          .icon {
            fill: #e73d32;
          }
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money" />
            记账页
          </NavLink>
        </li>
        <li>
          <NavLink to="/tabs" activeClassName="selected">
            <Icon name="tags" />
            标签页
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="statistics" />
            统计页
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
