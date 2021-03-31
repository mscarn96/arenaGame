import styled from "styled-components";
import { useSelector } from "../../redux/customHooks";
import { colors } from "../../game/ui/globalStyles";
import Item from "./Item";

interface Props {
  inventory: InventoryState;
}

interface ItemProps {
  item?: Item;
  champ: Champion;
}

const InventoryContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  margin-top: 15px;
  border: 2px solid ${colors.darkBlue};
  justify-items: center;
  align-items: center;
  position: relative;
`;

const ItemContainer = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  font-size: 0.9rem;
  background-color: ${colors.darkBlue};

  @media (min-width: 768px) {
    width: 70px;
    height: 70px;
  }

  @media (min-width: 1024px) {
    width: 90px;
    height: 90px;
  }
`;

const generateEmptyContainers = (n: number) => {
  const arr: number[] = [];
  for (let i = 0; i < n; i++) {
    arr.push(n);
  }
  return arr;
};

const ItemContainerElement = (props: ItemProps): JSX.Element => {
  const { item, champ } = props;

  return (
    <ItemContainer>
      {item !== undefined ? (
        <Item
          item={item}
          buyable={false}
          sellable={true}
          wearable={true}
          champ={champ}
        />
      ) : null}
    </ItemContainer>
  );
};

function Inventory(props: Props): JSX.Element {
  const champ = useSelector((state) => state.champion.currentChamp);

  const { items } = props.inventory;
  return (
    <InventoryContainer>
      {items.map((item) => (
        <ItemContainerElement key={item.id} item={item} champ={champ} />
      ))}
      {generateEmptyContainers(12 - items.length).map((element) => (
        <ItemContainerElement key={Math.random() * element} champ={champ} />
      ))}
    </InventoryContainer>
  );
}

export default Inventory;
