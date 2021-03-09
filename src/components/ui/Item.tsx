import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useSelector } from "../../redux/customHooks";
import { buyItem } from "../main/Market/Market";

// const armorSvgs = require.context( '../../images/items/armorImages', true, /\.svg$/ )

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  item: Item;
  buyable: boolean;
}

interface InfoProps {
  showInfo: boolean;
  name: string;
  description: string;
  item: Item;
  buyable: boolean;
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
    </ItemInfoContainer>
  );
};

const checkChildren = (ref: HTMLDivElement, event: MouseEvent) => {
  const elements = [].slice.call(ref.children);
  for (let element of elements) {
    if (element === event.target) {
      return true;
    }
  }
};
const Item = (props: Props) => {
  const { item, buyable } = props;
  const [showInfo, setShowInfo] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      let flag = false;
      if (itemRef.current !== null) {
        if (itemRef.current === event.target) {
          flag = true;
        } else if (checkChildren(itemRef.current, event)) {
          flag = true;
        } else if (itemRef.current.lastElementChild instanceof HTMLDivElement) {
          if (checkChildren(itemRef.current.lastElementChild, event)) {
            flag = true;
          }
        }
      }
      if (!flag) setShowInfo(false);
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
        showInfo={showInfo}
        name={item.name}
        description={item.description}
        setShowInfo={setShowInfo}
      />
    </ItemContainer>
  );
};

export default Item;
