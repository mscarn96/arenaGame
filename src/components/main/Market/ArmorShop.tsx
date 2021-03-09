import * as armors from "../../../game/items/armors";
import * as boots from "../../../game/items/boots";
import * as helmets from "../../../game/items/helmets";
import { renderItem } from "./Market";

const armorsArray = Object.values(armors);
const bootsArray = Object.values(boots);
const helmetArray = Object.values(helmets);

const ArmorShop = () => {
  return (
    <div>
      <section>
        <h1>Armors</h1>
        {armorsArray.map((armor, i) => renderItem(armor))}
        <h1>Boots</h1>
        {bootsArray.map((boots) => renderItem(boots))}
        <h1>Helmets</h1>
        {helmetArray.map((helmet) => renderItem(helmet))}
      </section>
    </div>
  );
};

export default ArmorShop;
