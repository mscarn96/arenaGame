import styled from "styled-components";
import * as armors from "../../../game/items/armors";
import * as boots from "../../../game/items/boots";
import * as helmets from "../../../game/items/helmets";
import { useSelector } from "../../../redux/customHooks";
import { renderItem } from "./Market";

const armorsArray = Object.values(armors);
const bootsArray = Object.values(boots);
const helmetArray = Object.values(helmets);

export const ShopContainer = styled.section`
  h1 {
    margin: 5px;
  }
`;

const ArmorShop = () => {
  const champ = useSelector((state) => state.champion.currentChamp);

  return (
    <div>
      <ShopContainer>
        <h1>Armors</h1>
        {armorsArray.map((armor, i) => renderItem(armor, champ))}
        <h1>Boots</h1>
        {bootsArray.map((boots) => renderItem(boots, champ))}
        <h1>Helmets</h1>
        {helmetArray.map((helmet) => renderItem(helmet, champ))}
      </ShopContainer>
    </div>
  );
};

export default ArmorShop;
