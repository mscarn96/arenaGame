import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import styled from "styled-components";
import { Dispatch } from "redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ArmorShop from "./ArmorShop";
import WeaponShop from "./WeaponShop";
import UseablesShop from "./WeaponShop";
import { addItem, spendGold } from "../../../redux/actions/itemActionCreators";

const Navigation = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px;
`;
const notify = (text: string) => toast.dark(text);

export const buyItem = (
  currentGold: number,
  item: Item,
  dispatch: Dispatch<any>
) => {
  if (currentGold >= item.cost) {
    dispatch(addItem(item));
    dispatch(spendGold(item.cost));
    notify(`You just bought ${item.name} for ${item.cost} gold!`);
  } else notify(`Not enough gold!`);
};

const Market = () => {
  return (
    <Router>
      <div>
        <Navigation>
          <li>
            <Link to="armorShop">Armor Shop</Link>
          </li>
          <li>
            <Link to="weaponShop">Weapon Shop</Link>
          </li>
          <li>
            <Link to="useablesShop">Useables Shop</Link>
          </li>
        </Navigation>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar
          closeOnClick={false}
          closeButton={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
        />

        <Switch>
          <Route path="/armorShop">
            <ArmorShop />
          </Route>
          <Route path="/weaponShop">
            <WeaponShop />
          </Route>
          <Route path="/useablesShop">
            <UseablesShop />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Market;
