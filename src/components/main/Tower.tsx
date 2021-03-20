import React, { useState } from "react";

import { initBattle } from "../../redux/actions/battleActionCreators";
import { Dispatch } from "redux";

import towerMobs from "../../game/monsters/towerMobs";
import TowerPlace from "../../game/places/Tower";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/customHooks";
import BattleScreen from "../battleScreen/BattleScreen";

const startBattle = (
  dispatch: Dispatch<any>,
  setIsBattleOn: React.Dispatch<React.SetStateAction<boolean>>,
  champ: Champion,
  towerBossesDefeated: number
) => {
  const enemy = towerMobs[towerBossesDefeated];
  const place = TowerPlace;
  setIsBattleOn(true);
  dispatch(initBattle(champ, enemy, place));
};

const Tower = () => {
  const [isBattleOn, setIsBattleOn] = useState<boolean>(false);
  const dispatch = useDispatch();
  const champ = useSelector((state) => state.champion.currentChamp);
  const towerBossesDefeated = useSelector(
    (state) => state.champion.towerBossesDefeated
  );

  return (
    <div>
      {isBattleOn ? (
        <BattleScreen isBattleOn={isBattleOn} toggleBattle={setIsBattleOn} />
      ) : (
        <button
          onClick={() =>
            startBattle(dispatch, setIsBattleOn, champ, towerBossesDefeated)
          }
        >
          Start Battle
        </button>
      )}
    </div>
  );
};

export default Tower;
