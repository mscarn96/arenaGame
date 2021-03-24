import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/customHooks";

import { basicAttack } from "../../game/battle";
import {
  consumeResource,
  damageEnemy,
  affectEnemy,
  healChamp,
} from "../../redux/actions/battleActionCreators";
import { warriorBasicAttack } from "../../game/moves/warriorMoves";
import { displayPlayerToasts } from "../../game/ui/toasts";
import styled from "styled-components";
import { colors } from "../../game/ui/globalStyles";

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
  setIsPlayerTurn: React.Dispatch<React.SetStateAction<boolean>>
) => {
  switch (potion.name) {
    case "Health Potion":
      const hpRecovered = Math.floor(champ.hp.fullHp * 0.2);
      displayPlayerToasts(
        `You have used Health Potion and recovered ${hpRecovered} health!`
      );
      setIsPlayerTurn(false);
      dispatch(healChamp(hpRecovered));
      break;
    case "Mana Potion":
      const manaRecovered = Math.floor(champ.res.full * 0.33);
      displayPlayerToasts(
        `You have used Mana Potion and recovered ${manaRecovered} mana!`
      );
      setIsPlayerTurn(false);
      dispatch(healChamp(manaRecovered));
      break;
    case "Super Health Potion":
      const hpRecoveredSuper = Math.floor(champ.hp.fullHp * 0.4);
      displayPlayerToasts(
        `You have used Super Health Potion and recovered ${hpRecoveredSuper} health!`
      );
      setIsPlayerTurn(false);
      dispatch(healChamp(hpRecoveredSuper));
      break;
    default:
      console.error(`Something went wrong, ${potion.name} is not a potion! `);
      break;
  }
};

const MovesContainer = styled.div`
  height: 30vh;
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

const Moves = (props: Props) => {
  const dispatch = useDispatch();
  const champ = useSelector((state) => state.battleState.champ);
  const enemy = useSelector((state) => state.battleState.enemy);
  const potions = useSelector((state) => state.InventoryState.items).filter(
    (item) => item.type === `potion`
  );
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
      <button disabled={!props.isPlayerTurn} onClick={() => attack()}>
        Basic Attack
      </button>
      {skillset.map((skill) => (
        <button
          key={skill.id}
          disabled={champ.res.current < skill.cost || !props.isPlayerTurn}
          onClick={() =>
            UseSkill(champ, enemy, skill, dispatch, props.setIsPlayerTurn)
          }
        >
          {skill.name}
        </button>
      ))}
      {potions.length > 0
        ? potions.map((potion) => (
            <button
              key={potion.id}
              disabled={!props.isPlayerTurn}
              onClick={() =>
                consumePotion(potion, champ, dispatch, props.setIsPlayerTurn)
              }
            >
              {potion.name}
            </button>
          ))
        : null}
    </MovesContainer>
  );
};

export default Moves;
