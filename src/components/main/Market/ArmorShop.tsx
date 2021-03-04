import React from "react";

import * as armors from "../../../game/items/armors";
import * as boots from "../../../game/items/boots";
import * as helmets from "../../../game/items/helmets";
import Item from "../../ui/Item";

const armorsArray = Object.values(armors);
const bootsArray = Object.values(boots);
const helmetArray = Object.values(helmets);

const renderItem = (itemF: () => Item): JSX.Element => {
  const item = itemF();
  return <Item key={item.id} item={item} />;
};

const ArmorShop = () => {
  return (
    <div>
      <section>
        <h1>Armors</h1>
        {armorsArray.map((armor) => renderItem(armor))}
        <h1>Boots</h1>
        {bootsArray.map((boots) => renderItem(boots))}
        <h1>Helmets</h1>
        {helmetArray.map((helmet) => renderItem(helmet))}
      </section>
    </div>
  );
};

export default ArmorShop;
