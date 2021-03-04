import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { getChampionWithEquippedItem } from "../../game/gameVariousFuncs";
import { modifyChamp } from "../../redux/actions/champActionCreators";
import { addItem, deleteItem } from "../../redux/actions/itemActionCreators";

///function that checks for typescript if the object has this specific property,
//so typescript will pass the loop through champion properties
function hasOwnProperty<O extends object, K extends PropertyKey>(
  obj: O,
  key: K
): obj is O & Record<K, unknown> {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

const ItemWrapper = styled.li``;

interface ItemProps {
  item: Item;
  champ: Champion;
}

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

export const Item = (props: ItemProps): JSX.Element => {
  const dispatch = useDispatch();
  const { item, champ } = props;

  const unequipItem = (champ: Champion, item: Item) => {
    const champToReplace = { ...champ };
    item.isEquipped = false;
    champToReplace.itemSlots[item.type] = null;
    removeStatsFromItem(champToReplace, item);
    dispatch(addItem(item));
    dispatch(modifyChamp(champToReplace));
  };

  const equipItem = (champ: Champion, item: Item) => {
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

  return (
    <ItemWrapper>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      {item.isEquipped ? (
        <button onClick={() => unequipItem(champ, item)}>Unequip Item</button>
      ) : (
        <button onClick={() => equipItem(champ, item)}>Equip Item</button>
      )}
    </ItemWrapper>
  );
};

interface Props {
  items: Item[];
  champ: Champion;
}

const Items = (props: Props) => {
  const { items } = props;
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} champ={props.champ} />
      ))}
    </ul>
  );
};

export default Items;
