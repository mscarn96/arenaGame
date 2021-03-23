import React, { useState, useRef, useEffect } from "react";

import styled from "styled-components";

import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/customHooks";

import { buyItem, sellItem } from "../main/Market/Market";
import { getChampionWithEquippedItem } from "../../game/gameVariousFuncs";

import { modifyChamp } from "../../redux/actions/champActionCreators";
import { addItem, deleteItem } from "../../redux/actions/itemActionCreators";
import { colors } from "../../game/ui/globalStyles";

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
  if (item.type !== `potion`) {
    const champToReplace = { ...champ };
    item.isEquipped = false;
    champToReplace.itemSlots[item.type] = null;
    removeStatsFromItem(champToReplace, item);
    dispatch(addItem(item));
    dispatch(modifyChamp(champToReplace));
  }
};

const equipItem = (champ: Champion, item: Item, dispatch: Dispatch) => {
  if (item.type !== `potion`) {
    const itemToInventory = champ.itemSlots[item.type];
    let champToReplace = { ...champ };
    if (itemToInventory !== null && itemToInventory.type !== `potion`) {
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
  }
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
  item: Item;
  buyable: boolean;
  sellable: boolean;
  wearable: boolean;
  setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
}

const ItemContainer = styled.div<{ imgPath: string }>`
  background-image: url(${(props) => props.imgPath});
  width: 50px;
  height: 50px;
  display: inline-block;
`;
const ItemButton = styled.button`
  width: 50px;
  height: 50px;
  cursor: pointer;
  background: transparent;

  &:active {
    border: 2px solid ${colors.lighterBlue};
  }
  &:focus {
    border: 2px solid ${colors.lighterBlue};
    outline: none;
  }
`;
const ItemInfoContainer = styled.div<{ visible: boolean }>`
  display: ${(props) => (props.visible ? "block" : "none")};
  background-color: black !important;
  color: white;
  width: 250px !important;
  height: 250px !important;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  button {
    margin: 15px;
    background-color: ${colors.darkBlue};
    color: ${colors.lighterBlue};
    border: 1px solid ${colors.lighterBlue};
    border-radius: 5px;
    font-size: 1rem;
  }

  #closeBtn {
    position: fixed;
    top: 0%;
    right: 5%;
  }
  h1 {
    margin: 10px;
  }
  p {
    margin: 10px;
  }
`;

const EquipItemButton = (item: Item, champ: Champion, dispatch: Dispatch) =>
  item.isEquipped ? (
    <button onClick={() => unequipItem(champ, item, dispatch)}>
      Unequip Item
    </button>
  ) : (
    <button onClick={() => equipItem(champ, item, dispatch)}>Equip Item</button>
  );

const ItemInfo = ({
  item,
  buyable,
  sellable,
  showInfo,
  setShowInfo,
  wearable,
}: InfoProps): JSX.Element => {
  const gold = useSelector((state) => state.InventoryState.gold);
  const champ = useSelector((state) => state.champion.currentChamp);
  const amountOfItemsInInventory = useSelector(
    (state) => state.InventoryState.items.length
  );
  const dispatch = useDispatch();

  return (
    <ItemInfoContainer visible={showInfo} id={`info`}>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>Cost : {item.cost}</p>
      <button id={`closeBtn`} onClick={() => setShowInfo(false)}>
        X
      </button>
      {buyable ? (
        <button
          onClick={() =>
            buyItem(gold, item, dispatch, amountOfItemsInInventory, setShowInfo)
          }
        >
          Buy Item
        </button>
      ) : null}
      {sellable ? (
        <button onClick={() => sellItem(item, setShowInfo, dispatch)}>
          Sell Item
        </button>
      ) : null}
      {wearable && item.type !== `potion`
        ? EquipItemButton(item, champ, dispatch)
        : null}
    </ItemInfoContainer>
  );
};

const Item = (props: Props) => {
  const { item, buyable, sellable, wearable } = props;
  const [showInfo, setShowInfo] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //close item window when clicked outside of it
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
    <ItemContainer id={item.id} ref={itemRef} imgPath={item.imgPath}>
      <ItemButton onClick={(e) => setShowInfo((prev) => !prev)} />
      <ItemInfo
        item={item}
        buyable={buyable}
        sellable={sellable}
        wearable={wearable}
        showInfo={showInfo}
        setShowInfo={setShowInfo}
      />
    </ItemContainer>
  );
};

export default Item;
