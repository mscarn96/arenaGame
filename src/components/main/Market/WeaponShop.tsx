import * as weapons from "../../../game/items/weapons";
import * as offhandItems from "../../../game/items/offhand";
import * as necklaces from "../../../game/items/necklaces";
import { renderItem } from "./Market";
import { useSelector } from "../../../redux/customHooks";
import { ShopContainer } from "./ArmorShop";

const weaponsArray = Object.values(weapons);
const offhandArray = Object.values(offhandItems);
const necklacesArray = Object.values(necklaces);

const WeaponShop = () => {
  const champ = useSelector((state) => state.champion.currentChamp);

  return (
    <ShopContainer>
      <h1>Main Hand Items</h1>
      {weaponsArray.map((weapon, i) => renderItem(weapon, champ))}
      <h1>Off Hand Items</h1>
      {offhandArray.map((offhandItem, i) => renderItem(offhandItem, champ))}
      <h1>Necklaces</h1>
      {necklacesArray.map((necklace, i) => renderItem(necklace, champ))}
    </ShopContainer>
  );
};

export default WeaponShop;
