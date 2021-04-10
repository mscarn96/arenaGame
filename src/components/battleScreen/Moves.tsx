import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/customHooks";

import { basicAttack } from "../../game/battle";
import {
  consumeResource,
  damageEnemy,
  affectEnemy,
  healChamp,
  gainResource,
} from "../../redux/actions/battleActionCreators";
import { warriorBasicAttack } from "../../game/moves/warriorMoves";
import { displayPlayerToasts } from "../../game/ui/toasts";
import styled from "styled-components";
import { colors } from "../../game/ui/globalStyles";
import { deleteItem } from "../../redux/actions/itemActionCreators";

enum ChampClass {
  Warrior = 0,
  Mage = 1,
  Hunter = 2,
  notPicked = -1,
}

type Props = {
  isPlayerTurn: boolean;
  setIsPlayerTurn: React.Dispatch<React.SetStateAction<boolean>>;
  displayToast: (text: string) => void;
};

const UseSkill = (
  ////Named by capital letter so eslint doesnt recognize this function as hook
  ///
  champ: Champion,
  enemy: Enemy,
  skill: Skill,
  dispatch: Dispatch<any>,
  setIsPlayerTurn: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  if (skill.type === `DAMAGE`) {
    ///if skill has damage type dispatch it to state
    const skillResult = skill.effect(champ, enemy);
    displayPlayerToasts(skillResult.statusText);
    dispatch(damageEnemy(skillResult.damage));
    dispatch(consumeResource(skill.cost));
    setIsPlayerTurn(false);
  } else {
    //dispatch skill effect to state
    const skillResult = skill.effect(champ, enemy);
    displayPlayerToasts(skillResult.statusText);
    if (skillResult.effectNumber) {
      dispatch(affectEnemy(skill.stat, skillResult.effectNumber));
    }
    ///consume resource and pass turn to enemy
    dispatch(consumeResource(skill.cost));
    setIsPlayerTurn(false);
  }
};

const consumePotion = (
  potion: Item,
  champ: Champion,
  dispatch: Dispatch<any>,
  setIsPlayerTurn: React.Dispatch<React.SetStateAction<boolean>>,
  inventory: Item[]
) => {
  switch (potion.name) {
    case "Health Potion":
      const hpRecovered = Math.floor(champ.hp.fullHp * 0.2);
      displayPlayerToasts(
        `You have used Health Potion and recovered ${hpRecovered} health!`
      );
      dispatch(healChamp(hpRecovered));
      break;
    case "Mana Potion":
      const manaRecovered = Math.floor(champ.res.full * 0.33);
      displayPlayerToasts(
        `You have used Mana Potion and recovered ${manaRecovered} mana!`
      );
      dispatch(gainResource(manaRecovered));
      break;
    case "Super Health Potion":
      const hpRecoveredSuper = Math.floor(champ.hp.fullHp * 0.4);
      displayPlayerToasts(
        `You have used Super Health Potion and recovered ${hpRecoveredSuper} health!`
      );
      dispatch(healChamp(hpRecoveredSuper));
      break;
    default:
      console.error(`Something went wrong, ${potion.name} is not a potion! `);
      break;
  }
  setIsPlayerTurn(false);
  dispatch(deleteItem(potion));
};

const MovesContainer = styled.div`
  height: 100%;
  width: 200%;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  button {
    font-family: "Cormorant Unicase", sans-serif;
    background: transparent;
    margin: 15px 10px 5px;
    border: 2px solid ${colors.lightBlue};
    border-radius: 5px;
    font-weight: 700;
    color: ${colors.lightBlue};
    cursor: pointer;
  }
  button:disabled {
    color: ${colors.gray};
    border: 2px solid ${colors.gray};
    opacity: 0.7;
  }
`;

const PotionButton = (
  potions: Item[],
  isPlayerTurn: boolean,
  champ: Champion,
  dispatch: Dispatch,
  setIsPlayerTurn: React.Dispatch<React.SetStateAction<boolean>>,
  inventory: Item[]
): JSX.Element => (
  <button
    key={potions[0].id}
    disabled={!isPlayerTurn}
    onClick={() =>
      consumePotion(
        potions[potions.length - 1],
        champ,
        dispatch,
        setIsPlayerTurn,
        inventory
      )
    }
  >
    {`use ${potions[0].name} (${potions.length})`}
  </button>
);

const Moves = (props: Props) => {
  const dispatch = useDispatch();
  const champ = useSelector((state) => state.battleState.champ);
  const enemy = useSelector((state) => state.battleState.enemy);
  const inventory = useSelector((state) => state.InventoryState.items);

  const { isPlayerTurn, setIsPlayerTurn } = props;

  const potions = inventory.filter((item) => item.type === `potion`);

  const hpPotions = potions.filter((potion) => potion.name === "Health Potion");
  const superHpPotions = potions.filter(
    (potion) => potion.name === "Super Health Potion"
  );
  const manaPotions = potions.filter((potion) => potion.name === "Mana Potion");

  const skillset = champ.skillset;

  const attack = () => {
    if (enemy !== undefined) {
      const attackResult =
        champ.champClass === ChampClass.Warrior
          ? warriorBasicAttack(champ, enemy, dispatch)
          : basicAttack(champ, enemy);
      dispatch(damageEnemy(attackResult.damage));
      props.displayToast(attackResult.statusText);
      props.setIsPlayerTurn(false);
    } else console.warn("No Enemy!");
  };
  return (
    <MovesContainer>
      <button disabled={!isPlayerTurn} onClick={() => attack()}>
        Basic Attack
      </button>
      {skillset.map((skill) => (
        <button
          key={skill.id}
          disabled={champ.res.current < skill.cost || !isPlayerTurn}
          onClick={() =>
            UseSkill(champ, enemy, skill, dispatch, setIsPlayerTurn)
          }
        >
          {skill.name}
        </button>
      ))}
      {hpPotions.length > 0
        ? PotionButton(
            hpPotions,
            isPlayerTurn,
            champ,
            dispatch,
            setIsPlayerTurn,
            inventory
          )
        : null}
      {superHpPotions.length > 0
        ? PotionButton(
            superHpPotions,
            isPlayerTurn,
            champ,
            dispatch,
            setIsPlayerTurn,
            inventory
          )
        : null}
      {manaPotions.length > 0
        ? PotionButton(
            manaPotions,
            isPlayerTurn,
            champ,
            dispatch,
            setIsPlayerTurn,
            inventory
          )
        : null}
    </MovesContainer>
  );
};

export default Moves;
