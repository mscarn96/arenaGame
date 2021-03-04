import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { buyItem } from "../main/Market/Market";

// const armorSvgs = require.context( '../../images/items/armorImages', true, /\.svg$/ )

interface Props {
  item: Item;
}

interface InfoProps {
  showInfo: boolean;
  name: string;
  description: string;
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

const ItemInfo = ({ showInfo, name, description }: InfoProps): JSX.Element => {
  return (
    <ItemInfoContainer visible={showInfo}>
      <h1>{name}</h1>
      <p>{description}</p>
    </ItemInfoContainer>
  );
};

////////zrob zeby klik poza wylaczal itemek

function useOutsideAlerter(ref: React.RefObject<Element>) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Element)) {
        console.log("You clicked outside of me!");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

////zrob rozdzielenie refa na pojedynczy item
/// https://stackoverflow.com/questions/54940399/how-target-dom-with-react-useref-in-map/55105849

const Item = ({ item }: Props) => {
  const [showInfo, setShowInfo] = useState(false);
  const itemRef = useRef(null);
  useOutsideAlerter(itemRef);

  return (
    <ItemContainer
      ref={itemRef}
      // onMouseEnter={e => {setShowInfo(true)}}
      // onMouseLeave={e => {setShowInfo(false)}}
    >
      <ItemButton onClick={(e) => setShowInfo((prev) => !prev)} />
      <p>{item.name}</p>
      <ItemInfo
        showInfo={showInfo}
        name={item.name}
        description={item.description}
      />
    </ItemContainer>
  );
};

export default Item;
