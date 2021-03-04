import React from "react";

import styled from "styled-components";

import { useSelector } from "../../redux/customHooks";
import ProgressBar from "../ui/ProgressBar";
import { expToLvlUp } from "../../game/battle";
import Items, { Item } from "./Items";

const CharacterWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: nowrap;
`;

const EquipmentWrapper = styled.div`
  width: 50%;
`;

const ChampionEquipment = (champ: Champion) => {
  const { itemSlots } = champ;
  return (
    <EquipmentWrapper>
      <div>
        Head :{" "}
        {itemSlots.head ? (
          <Item champ={champ} item={itemSlots.head} />
        ) : (
          "EMPTY"
        )}
      </div>
      <div>
        Body :{" "}
        {itemSlots.body ? (
          <Item champ={champ} item={itemSlots.body} />
        ) : (
          "EMPTY"
        )}
      </div>
      <div>
        Legs :{" "}
        {itemSlots.feet ? (
          <Item champ={champ} item={itemSlots.feet} />
        ) : (
          "EMPTY"
        )}
      </div>
      <div>
        Feet :{" "}
        {itemSlots.feet ? (
          <Item champ={champ} item={itemSlots.feet} />
        ) : (
          "EMPTY"
        )}
      </div>
      <div>
        Neck :{" "}
        {itemSlots.neck ? (
          <Item champ={champ} item={itemSlots.neck} />
        ) : (
          "EMPTY"
        )}
      </div>
      <div>
        Right hand :{" "}
        {itemSlots.rightHand ? (
          <Item champ={champ} item={itemSlots.rightHand} />
        ) : (
          "EMPTY"
        )}
      </div>
      <div>
        Left hand :{" "}
        {itemSlots.leftHand ? (
          <Item champ={champ} item={itemSlots.leftHand} />
        ) : (
          "EMPTY"
        )}
      </div>
    </EquipmentWrapper>
  );
};

const Stats = (champ: Champion) => {
  return (
    <div>
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
      <p>
        Exp:{champ.exp} / {expToLvlUp[champ.level - 1]}
      </p>
    </div>
  );
};

const Character = () => {
  const champ = useSelector((state) => state.champion.currentChamp);
  const inventory = useSelector((state) => state.InventoryState);

  return (
    <>
      <h1>{champ.name}</h1>
      <p>Level : {champ.level}</p>
      <ProgressBar
        width={40}
        bgcolor={"green"}
        current={champ.hp.currentHp ?? 0}
        total={champ.hp.fullHp ?? 0}
      />
      <CharacterWrapper>
        {ChampionEquipment(champ)}
        {Stats(champ)}
        <Items items={inventory.items} champ={champ} />
      </CharacterWrapper>
    </>
  );
};

export default Character;
