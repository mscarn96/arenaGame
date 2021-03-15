import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import styled from "styled-components";

import Tower from "./Tower";
import Practice from "./Practice";
import Market from "./Market/Market";
import Tavern from "./Tavern";
import Wild from "./Wild";
import Arena from "./Arena";
import Character from "./Character";
import { colors } from "../ui/globalStyles";

const Navigation = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 1.4rem;
  margin: 0;
  padding: 0;
  justify-content: space-around;
  list-style: none;
  text-decoration: none;
  color: ${colors.lighterBlue};

  li a {
    color: ${colors.lighterBlue};
    text-decoration: none;
    margin: 5px;
  }

  li a:visited {
    color: ${colors.lighterBlue};
    text-decoration: none;
  }
`;

const Main = () => {
  return (
    <Router>
      <div>
        <Navigation>
          <li>
            <Link to="character">Character</Link>
          </li>
          <li>
            <Link to="practice">Practice</Link>
          </li>
          <li>
            <Link to="market">Market</Link>
          </li>
          <li>
            <Link to="tavern">Tavern</Link>
          </li>
          <li>
            <Link to="wild">Wild</Link>
          </li>
          <li>
            <Link to="arena">Arena</Link>
          </li>
          <li>
            <Link to="tower">Tower</Link>
          </li>
        </Navigation>

        <Switch>
          <Route path="/character">
            <Character />
          </Route>
          <Route path="/practice">
            <Practice />
          </Route>
          <Route path="/market">
            <Market />
          </Route>
          <Route path="/tavern">
            <Tavern />
          </Route>
          <Route path="/wild">
            <Wild />
          </Route>
          <Route path="/arena">
            <Arena />
          </Route>
          <Route path="/tower">
            <Tower />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
