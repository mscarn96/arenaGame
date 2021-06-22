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
import { useSelector } from "../../../redux/customHooks";

import backgroundImg from "../../../images/marketBackground.webp";
import { colors } from "../../../game/ui/globalStyles";
import { useState } from "react";

const Navigation = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 10px;
  padding: 0;
`;

interface MarketProps {
  activeShop: string;
}

const MarketContainer = styled.div<MarketProps>`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  padding: 10px;
  height: 90vh;
  box-shadow: inset 0px 0px 50px 50px rgba(30, 30, 30, 0.89);

  ul {
    list-style: none;
  }
  a {
    padding: 5px;
    text-decoration: none;
    color: ${colors.white};
    font-family: "Cormorant Unicase", sans-serif;
    background: rgba(0, 0, 0, 0.5);
    border: 2px solid ${colors.white};
    border-radius: 5px;
    font-weight: 700;
    cursor: pointer;
  }

  span {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    font-family: sans-serif;
    font-size: 0.5rem;
    bottom: 0;
    left: 0;
  }

  #armor {
    transform: ${(props) =>
      props.activeShop === `armor` ? `scale(1.1)` : `scale(1)`};
    transition: 0.5s;
  }

  #weapon {
    transform: ${(props) =>
      props.activeShop === `weapon` ? `scale(1.1)` : `scale(1)`};
    transition: 0.5s;
  }

  #armor a {
    color: ${(props) =>
      props.activeShop === `armor` ? colors.lighterBlue : colors.white};
    border-color: ${(props) =>
      props.activeShop === `armor` ? colors.lighterBlue : colors.white};
  }

  #weapon a {
    color: ${(props) =>
      props.activeShop === `weapon` ? colors.lighterBlue : colors.white};
    border-color: ${(props) =>
      props.activeShop === `weapon` ? colors.lighterBlue : colors.white};
  }
`;
const notify = (text: string) => toast.dark(text);

export const renderItem = (itemF: () => Item, champ: Champion): JSX.Element => {
  const item = itemF();
  return (
    <Item
      key={item.id}
      champ={champ}
      item={item}
      isBuyable={true}
      isSellable={false}
      isWearable={false}
    />
  );
};

export const buyItem = (
  currentGold: number,
  item: Item,
  dispatch: Dispatch<any>,
  amountOfItemsInInventory: number,
  setShowInfo?: React.Dispatch<React.SetStateAction<boolean>>
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
    dispatch(spendGold(itemToBuy.cost));
    notify(`You just bought ${itemToBuy.name} for ${itemToBuy.cost} gold!`);
    if (setShowInfo) setShowInfo(false);
  } else notify(`Not enough gold!`);
};

export const sellItem = (
  item: Item,
  setShowInfo: React.Dispatch<React.SetStateAction<boolean>>,
  dispatch: Dispatch<any>
) => {
  const goldForSell = Math.floor(item.cost / 2);
  dispatch(deleteItem(item));
  dispatch(addGold(goldForSell));
  notify(`You just sold ${item.name} for ${goldForSell} gold!`);
  setShowInfo(false);
};

const Market = () => {
  const gold = useSelector((state) => state.InventoryState.gold);
  const [activeShop, setActiveShop] = useState(``);

  return (
    <Router>
      <MarketContainer activeShop={activeShop}>
        <p>Gold : ${gold}</p>
        <Navigation>
          <li onClick={() => setActiveShop(`armor`)} id={`armor`}>
            <Link to="armorShop">Armor Shop</Link>
          </li>
          <li onClick={() => setActiveShop(`weapon`)} id={`weapon`}>
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
        <span>Background Image by Minnhagen</span>
      </MarketContainer>
    </Router>
  );
};

export default Market;
