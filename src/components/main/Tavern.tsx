import React from "react";
import { Dispatch } from "redux";

import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/customHooks";
import { modifyChamp } from "../../redux/actions/champActionCreators";
import { addGold } from "../../redux/actions/itemActionCreators";
import { addExpAndcheckLvlUp } from "../../game/battle";

const fullHeal = (champ: Champion, dispatch: Dispatch<any>) => {
  const champToReplace = { ...champ };
  const fullHp = champ.hp.fullHp;
  champToReplace.hp.currentHp = fullHp;
  dispatch(modifyChamp(champToReplace));
};

const add1000Gold = (dispatch: Dispatch<any>) => {
  dispatch(addGold(1000));
};

const Tavern = () => {
  const champ = useSelector((state) => state.champion.currentChamp);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => fullHeal(champ, dispatch)}>HEAL</button>
      <button onClick={() => add1000Gold(dispatch)}>Add 1000 gold</button>
      <button
        onClick={() => dispatch(modifyChamp(addExpAndcheckLvlUp(champ, 1000)))}
      >
        add 1000 exp
      </button>
    </div>
  );
};

export default Tavern;
