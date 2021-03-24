import React from "react";
import { Dispatch } from "redux";

import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/customHooks";
import { modifyChamp } from "../../redux/actions/champActionCreators";
import { addGold, spendGold } from "../../redux/actions/itemActionCreators";
import { addExpAndcheckLvlUp } from "../../game/lvlUp";
import { buyItem } from "./Market/Market";
import styled from "styled-components";
import { ButtonStyles } from "../../game/ui/globalStyles";

import * as potions from "../../game/items/potions";
import TavernBackground from "../../images/tavernBackground.jpg";
import { toast } from "react-toastify";

enum ChampClass {
  Warrior = 0,
  Mage = 1,
  Hunter = 2,
  notPicked = -1,
}

const notify = (text: string) => toast.dark(text);

const fullHeal = (
  champ: Champion,
  dispatch: Dispatch<any>,
  currentGold: number
) => {
  if (champ.hp.currentHp === champ.hp.fullHp) {
    notify(`You are already healthy!`);
    return;
  }
  if (currentGold >= 20) {
    const champToReplace = { ...champ };
    const fullHp = champ.hp.fullHp;
    champToReplace.hp.currentHp = fullHp;
    dispatch(spendGold(20));
    dispatch(modifyChamp(champToReplace));
    notify(`You are now at maximum health`);
  } else notify(`Not enough gold!`);
};
const manaRefill = (
  champ: Champion,
  dispatch: Dispatch<any>,
  currentGold: number
) => {
  if (champ.res.current === champ.res.full) {
    notify(`You are already have maximum mana!`);
    return;
  }
  if (currentGold >= 10) {
    const champToReplace = { ...champ };
    const fullMana = champ.res.full;
    champToReplace.res.current = fullMana;
    dispatch(spendGold(10));
    dispatch(modifyChamp(champToReplace));
    notify("You have now maximum mana");
  } else notify(`Not enough gold!`);
};

const add1000Gold = (dispatch: Dispatch<any>) => {
  dispatch(addGold(1000));
};

const TavernContainer = styled.div`
  background-image: url(${TavernBackground});
  background-size: cover;
  padding: 10px;
  height: 90vh;
  position: relative;

  span {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    font-family: sans-serif;
    font-size: 0.5rem;
    bottom: 8%;
    left: 0;
  }
`;

const ServiceContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  p {
    margin: 12px;
  }
  button {
    ${ButtonStyles}
    padding: 5px;
  }
`;

const Tavern = () => {
  const champ = useSelector((state) => state.champion.currentChamp);
  const currentGold = useSelector((state) => state.InventoryState.gold);
  const inventory = useSelector((state) => state.InventoryState.items);
  const dispatch = useDispatch();

  return (
    <TavernContainer>
      <button onClick={() => add1000Gold(dispatch)}>Add 1000 gold</button>
      <button
        onClick={() => dispatch(modifyChamp(addExpAndcheckLvlUp(champ, 1000)))}
      >
        add 1000 exp
      </button>

      <ServiceContainer>
        <p>Full heal - cost 20 gold (immediately recover 100% hp)</p>
        <button onClick={() => fullHeal(champ, dispatch, currentGold)}>
          Buy
        </button>
      </ServiceContainer>

      <ServiceContainer>
        <p>
          Health Potion - 25 gold (regenerates 25% hp,can be used in combat)
        </p>
        <button
          onClick={() =>
            buyItem(
              currentGold,
              potions.HealthPotion(),
              dispatch,
              inventory.length
            )
          }
        >
          Buy
        </button>
      </ServiceContainer>

      {champ.champClass === ChampClass.Mage ? (
        <ServiceContainer>
          <p>
            Mana Potion - 15 gold (regenerates 33% mana, can be used in combat)
          </p>
          <button
            onClick={() =>
              buyItem(
                currentGold,
                potions.ManaPotion(),
                dispatch,
                inventory.length
              )
            }
          >
            Buy
          </button>
        </ServiceContainer>
      ) : null}

      <ServiceContainer>
        <p>
          Buy Super Health Potion - 50 gold(regenerates 40% hp,can be used in
          combat)
        </p>
        <button
          onClick={() =>
            buyItem(
              currentGold,
              potions.SuperHealthPotion(),
              dispatch,
              inventory.length
            )
          }
        >
          Buy
        </button>
      </ServiceContainer>

      {champ.champClass === ChampClass.Mage ? (
        <ServiceContainer>
          <p>Full mana refill - cost 10 gold(immediately recover 100% mana)</p>
          <button onClick={() => manaRefill(champ, dispatch, currentGold)}>
            Buy
          </button>
        </ServiceContainer>
      ) : null}
      <span>Image by LEE MIN GI</span>
    </TavernContainer>
  );
};

export default Tavern;
