import * as weapons from "../../../game/items/weapons";
import { renderItem } from "./Market";

const weaponsArray = Object.values(weapons);

const WeaponShop = () => {
  return (
    <div>
      <section>
        <h1>Weapons</h1>
        {weaponsArray.map((weapon, i) => renderItem(weapon))}
      </section>
    </div>
  );
};

export default WeaponShop;
