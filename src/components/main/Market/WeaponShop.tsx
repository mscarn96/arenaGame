import * as weapons from "../../../game/items/weapons";
import * as offhandItems from "../../../game/items/offhand";
import * as necklaces from "../../../game/items/necklaces";
import { renderItem } from "./Market";

const weaponsArray = Object.values(weapons);
const offhandArray = Object.values(offhandItems);
const necklacesArray = Object.values(necklaces);

const WeaponShop = () => {
  return (
    <div>
      <section>
        <h1>Main Hand Items</h1>
        {weaponsArray.map((weapon, i) => renderItem(weapon))}
        <h1>Off Hand Items</h1>
        {offhandArray.map((offhandItem, i) => renderItem(offhandItem))}
        <h1>Necklaces</h1>
        {necklacesArray.map((necklace, i) => renderItem(necklace))}
      </section>
    </div>
  );
};

export default WeaponShop;
