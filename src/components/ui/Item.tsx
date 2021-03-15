import React, { useState, useRef, useEffect } from "react";

import styled from "styled-components";

import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/customHooks";

import { buyItem } from "../main/Market/Market";
import { getChampionWithEquippedItem } from "../../game/gameVariousFuncs";

import { modifyChamp } from "../../redux/actions/champActionCreators";
import { addItem, deleteItem } from "../../redux/actions/itemActionCreators";

// const armorSvgs = require.context( '../../images/items/armorImages', true, /\.svg$/ )

///checks if the object has this specific property,
//so typescript will pass the loop through champion properties
function hasOwnProperty<O extends object, K extends PropertyKey>(
  obj: O,
  key: K
): obj is O & Record<K, unknown> {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

//checks if click target is one of a children of given div
const checkChildren = (ref: HTMLDivElement, event: MouseEvent) => {
  const elements = [].slice.call(ref.children);
  for (let element of elements) {
    if (element === event.target) {
      return true;
    }
  }
  return false;
};

const addStatsFromItem = (champ: Champion, item: Item) => {
  const properties = Object.entries(item.value);

  properties.forEach(([key, value]) => {
    if (hasOwnProperty(champ, key)) {
      champ[key] = champ[key] + value;
    }
  });
};

const removeStatsFromItem = (champ: Champion, item: Item) => {
  const properties = Object.entries(item.value);

  properties.forEach(([key, value]) => {
    if (hasOwnProperty(champ, key)) {
      const currentValue = champ[key];
      if (typeof currentValue === "number") {
        champ[key] = currentValue - value;
      }
    }
  });
};

const unequipItem = (champ: Champion, item: Item, dispatch: Dispatch) => {
  const champToReplace = { ...champ };
  item.isEquipped = false;
  champToReplace.itemSlots[item.type] = null;
  removeStatsFromItem(champToReplace, item);
  dispatch(addItem(item));
  dispatch(modifyChamp(champToReplace));
};

const equipItem = (champ: Champion, item: Item, dispatch: Dispatch) => {
  const itemToInventory = champ.itemSlots[item.type];
  let champToReplace = { ...champ };
  if (itemToInventory !== null) {
    itemToInventory.isEquipped = false;
    champToReplace.itemSlots[itemToInventory.type] = null;
    removeStatsFromItem(champToReplace, itemToInventory);
    dispatch(addItem(itemToInventory));
  }
  item.isEquipped = true;
  addStatsFromItem(champToReplace, item);
  champToReplace = getChampionWithEquippedItem(champToReplace, item);
  dispatch(modifyChamp(champToReplace));
  dispatch(deleteItem(item));
};

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  item: Item;
  buyable: boolean;
  sellable: boolean;
  wearable: boolean;
  champ: Champion;
}

interface InfoProps {
  showInfo: boolean;
  name: string;
  description: string;
  item: Item;
  buyable: boolean;
  sellable: boolean;
  wearable: boolean;
  setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
}

const ItemContainer = styled.div`
  width: 50px;
  height: 50px;
  display: inline-block;
`;
const ItemButton = styled.button`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
const ItemInfoContainer = styled.div<{ visible: boolean }>`
  display: ${(props) => (props.visible ? "block" : "none")};
  background-color: black;
  color: white;
  width: 200px;
  height: 200px;
  position: fixed;
`;

const ItemInfo = ({
  item,
  buyable,
  showInfo,
  name,
  description,
  setShowInfo,
}: InfoProps): JSX.Element => {
  const gold = useSelector((state) => state.InventoryState.gold);
  const champ = useSelector((state) => state.champion.currentChamp);
  const dispatch = useDispatch();

  return (
    <ItemInfoContainer visible={showInfo}>
      <h1>{name}</h1>
      <p>{description}</p>
      {buyable ? (
        <button onClick={() => buyItem(gold, item, setShowInfo, dispatch)}>
          Buy Item
        </button>
      ) : null}
      {item.isEquipped ? (
        <button onClick={() => unequipItem(champ, item, dispatch)}>
          Unequip Item
        </button>
      ) : (
        <button onClick={() => equipItem(champ, item, dispatch)}>
          Equip Item
        </button>
      )}
    </ItemInfoContainer>
  );
};

const Item = (props: Props) => {
  const { item, buyable, sellable, wearable } = props;
  const [showInfo, setShowInfo] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      let isClickedInside = false;
      if (itemRef.current !== null) {
        if (
          itemRef.current === event.target ||
          checkChildren(itemRef.current, event)
        ) {
          isClickedInside = true;
        } else if (
          itemRef.current.lastElementChild instanceof HTMLDivElement &&
          checkChildren(itemRef.current.lastElementChild, event)
        ) {
          isClickedInside = true;
        }
      }
      if (!isClickedInside) setShowInfo(false);
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [showInfo]);

  return (
    <ItemContainer id={item.id} ref={itemRef}>
      <ItemButton onClick={(e) => setShowInfo((prev) => !prev)} />
      <p>{item.name}</p>
      <ItemInfo
        item={item}
        buyable={buyable}
        sellable={sellable}
        wearable={wearable}
        showInfo={showInfo}
        name={item.name}
        description={item.description}
        setShowInfo={setShowInfo}
      />
    </ItemContainer>
  );
};

export default Item;
