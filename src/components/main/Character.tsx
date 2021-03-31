import styled from "styled-components";

import { useSelector } from "../../redux/customHooks";

import ProgressBar from "../ui/ProgressBar";
import { expToLvlUp } from "../../game/lvlUp";
import Item from "../battleScreen/Item";
import { getResBarColor } from "../battleScreen/Player";
import { colors } from "../../game/ui/globalStyles";
import Inventory from "../battleScreen/Inventory";
import { getChampClass } from "../../game/gameVariousFuncs";

const CharacterWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50px 1fr 2fr;
  grid-template-areas:
    "name level"
    "bars equipment"
    "stats inventory";
  margin-bottom: 5px;
  height: 80vh;
  padding: 5px 15px;

  h1 {
    grid-area: name;
    margin: 0;
    justify-self: center;
    align-self: center;
  }
  p {
    grid-area: level;
    margin: 0;
    justify-self: center;
    align-self: center;
  }
  .progressBars {
    grid-area: bars;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .progressBars div {
    margin: 0;
    padding: 0;
  }
`;

const EquipmentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    ". head neck"
    "left-hand body right-hand"
    ". feet .";
  grid-gap: 10px;
  place-items: center;

  div {
    width: 50px;
    height: 50px;
    border: 1px solid black;
    font-size: 0.9rem;
    background-color: ${colors.darkBlue};
    text-align: center;
  }

  @media (min-width: 768px) {
    div {
      width: 70px;
      height: 70px;
    }
  }

  @media (min-width: 1024px) {
    div {
      width: 90px;
      height: 90px;
    }
  }

  .head {
    grid-area: head;
  }
  .body {
    grid-area: body;
  }
  .feet {
    grid-area: feet;
  }
  .neck {
    grid-area: neck;
  }
  .right-hand {
    grid-area: right-hand;
  }
  .left-hand {
    grid-area: left-hand;
  }
`;
// zrob item icons
const ChampionEquipment = (champ: Champion) => {
  const { itemSlots } = champ;
  return (
    <EquipmentWrapper>
      <div className={`head`}>
        {itemSlots.head ? (
          <Item
            wearable={true}
            champ={champ}
            item={itemSlots.head}
            buyable={false}
            sellable={false}
          />
        ) : (
          "head"
        )}
      </div>
      <div className={`body`}>
        {itemSlots.body ? (
          <Item
            champ={champ}
            item={itemSlots.body}
            buyable={false}
            sellable={false}
            wearable={true}
          />
        ) : (
          "body"
        )}
      </div>
      <div className={`feet`}>
        {itemSlots.feet ? (
          <Item
            champ={champ}
            item={itemSlots.feet}
            buyable={false}
            sellable={false}
            wearable={true}
          />
        ) : (
          "feet"
        )}
      </div>
      <div className={`neck`}>
        {itemSlots.neck ? (
          <Item
            champ={champ}
            item={itemSlots.neck}
            buyable={false}
            sellable={false}
            wearable={true}
          />
        ) : (
          "neck"
        )}
      </div>
      <div className={`right-hand`}>
        {itemSlots.rightHand ? (
          <Item
            champ={champ}
            item={itemSlots.rightHand}
            buyable={false}
            sellable={false}
            wearable={true}
          />
        ) : (
          "right hand"
        )}
      </div>
      <div className={`left-hand`}>
        {itemSlots.leftHand ? (
          <Item
            champ={champ}
            item={itemSlots.leftHand}
            buyable={false}
            sellable={false}
            wearable={true}
          />
        ) : (
          "left hand"
        )}
      </div>
    </EquipmentWrapper>
  );
};

const Stats = (champ: Champion, gold: number) => {
  return (
    <div>
      <h3>Gold: {gold}</h3>
      <b>Class : {getChampClass(champ.champClass)}</b>
      <p>Level: {champ.level}</p>
      <p>Health points: {champ.hp.fullHp}</p>
      <p>Attack damage:{champ.attackDamage}</p>
      <p>Magic power:{champ.magicPower}</p>
      <p>Armor:{champ.armor}</p>
      <p>Magic Defence:{champ.magicDef}</p>
      <p>Dodge chance:{champ.dodgeChance}</p>
      <p>Block chance:{champ.blockChance}</p>
      <p>Critical hit chance:{champ.critChance}</p>
      <p>Accuracy:{champ.accuracy}</p>
    </div>
  );
};

const Character = () => {
  const champ = useSelector((state) => state.champion.currentChamp);
  const inventory = useSelector((state) => state.InventoryState);
  const gold = useSelector((state) => state.InventoryState.gold);

  return (
    <CharacterWrapper>
      <h1>{champ.name}</h1>
      <p>Level : {champ.level}</p>
      <div className={"progressBars"}>
        HP
        <ProgressBar
          width={80}
          bgcolor={"green"}
          current={champ.hp.currentHp ?? 0}
          total={champ.hp.fullHp ?? 0}
        />
        Resource
        <ProgressBar
          width={80}
          bgcolor={getResBarColor(champ)}
          current={champ.res.current ?? 0}
          total={champ.res.full ?? 0}
        />
        EXP
        <ProgressBar
          width={80}
          bgcolor={"gray"}
          current={champ.exp ?? 0}
          total={expToLvlUp[champ.level - 1] ?? 0}
        />
      </div>
      {ChampionEquipment(champ)}
      {Stats(champ, gold)}
      <Inventory inventory={inventory} />
    </CharacterWrapper>
  );
};

export default Character;
