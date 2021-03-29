import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import styled from "styled-components";

import Tower from "./Tower";
import Practice from "./Practice";
import Market from "./Market/Market";
import Tavern from "./Tavern";
import Wild from "./Wild";
import Character from "./Character";
import { colors } from "../../game/ui/globalStyles";
import { useEffect, useState } from "react";

interface NavigationProps {
  currLocation: string;
}

const NavigationContainer = styled.ul<NavigationProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 10vh;
  font-size: 1.4rem;
  margin: 5px;
  margin-bottom: 20px;
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

  li.${(props) => props.currLocation} a {
    color: ${colors.white};
    padding: 5px;
    border: 1px solid ${colors.white};
    border-radius: 5px;
    transform: scale(1.2);
    transition: 0.2s;
  }
`;

const Navigation = (): JSX.Element => {
  const location = useLocation();

  const [currLocation, setCurrLocation] = useState(location.pathname);

  useEffect(() => {
    setCurrLocation(location.pathname.substr(1));
  }, [location.pathname]);

  return (
    <NavigationContainer currLocation={currLocation}>
      <p></p>
      <li className={`character`}>
        <Link to="character">Character</Link>
      </li>
      <li className={`practice`}>
        <Link to="practice">Practice</Link>
      </li>
      <li className={`market`}>
        <Link to="market">Market</Link>
      </li>
      <li className={`tavern`}>
        <Link to="tavern">Tavern</Link>
      </li>
      <li className={`wild`}>
        <Link to="wild">Wild</Link>
      </li>
      <li className={`tower`}>
        <Link to="tower">Tower</Link>
      </li>
    </NavigationContainer>
  );
};

const Main = () => {
  return (
    <Router>
      <div className="game">
        <Navigation />
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
          <Route path="/tower">
            <Tower />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
