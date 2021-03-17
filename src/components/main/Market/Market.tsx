import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import styled from "styled-components";
import { Dispatch } from "redux";

import { toast } from "react-toastify";

import { v4 as uuidv4 } from "uuid";

import ArmorShop from "./ArmorShop";
import WeaponShop from "./WeaponShop";
import Item from "../../battleScreen/Item";
import {
  addGold,
  addItem,
  deleteItem,
  spendGold,
} from "../../../redux/actions/itemActionCreators";

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
  dispatch: Dispatch<any>,
  amountOfItemsInInventory: number
) => {
  if (amountOfItemsInInventory >= 12) {
    notify(`You can only have maximum 12 items in Inventory!`);
    return;
  }
  if (currentGold >= item.cost) {
    //generate unique ID when buying item
    const itemToBuy = { ...item };
    itemToBuy.id = uuidv4();

    dispatch(addItem(itemToBuy));
    dispatch(spendGold(item.cost));
    notify(`You just bought ${item.name} for ${item.cost} gold!`);
    setShowInfo(false);
  } else notify(`Not enough gold!`);
};

export const sellItem = (
  item: Item,
  setShowInfo: React.Dispatch<React.SetStateAction<boolean>>,
  dispatch: Dispatch<any>
) => {
  dispatch(deleteItem(item));
  dispatch(addGold(item.cost / 2));
  notify(`You just sold ${item.name} for ${item.cost / 2} gold!`);
  setShowInfo(false);
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
