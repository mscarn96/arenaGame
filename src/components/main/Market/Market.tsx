import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import styled from "styled-components";
import { Dispatch } from "redux";

import { toast } from "react-toastify";

import ArmorShop from "./ArmorShop";
import WeaponShop from "./WeaponShop";
import Item from "../../ui/Item";
import { addItem, spendGold } from "../../../redux/actions/itemActionCreators";

const Navigation = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px;
`;
const notify = (text: string) => toast.dark(text);

export const renderItem = (itemF: () => Item, champ: Champion): JSX.Element => {
  const item = itemF();
  return (
    <Item
      key={item.id}
      champ={champ}
      item={item}
      buyable={true}
      sellable={false}
      wearable={false}
    />
  );
};

export const buyItem = (
  currentGold: number,
  item: Item,
  setShowInfo: React.Dispatch<React.SetStateAction<boolean>>,
  dispatch: Dispatch<any>
) => {
  if (currentGold >= item.cost) {
    dispatch(addItem(item));
    dispatch(spendGold(item.cost));
    notify(`You just bought ${item.name} for ${item.cost} gold!`);
    setShowInfo(false);
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
        </Navigation>

        <Switch>
          <Route path="/armorShop">
            <ArmorShop />
          </Route>
          <Route path="/weaponShop">
            <WeaponShop />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Market;
