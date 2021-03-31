import React, { useState } from "react";

import { initBattle } from "../../redux/actions/battleActionCreators";
import { Dispatch } from "redux";

import towerMobs from "../../game/monsters/towerMobs";
import TowerPlace from "../../game/places/Tower";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/customHooks";
import BattleScreen from "../battleScreen/BattleScreen";
import styled from "styled-components";
import { colors } from "../../game/ui/globalStyles";

const TowerContainer = styled.div`
  height: 100%;
  background-image: url(${TowerPlace.image});
  background-position: center;
  background-size: cover;

  button.startArenaBattle {
    background: rgba(0, 0, 0, 0.5);
    border: 3px solid ${colors.white};
    border-radius: 15px;
    width: 50%;
    font-family: "Cormorant Unicase", sans-serif;
    cursor: pointer;
    color: ${colors.white};
    font-size: 1.6rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

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
    <TowerContainer>
      {isBattleOn ? (
        <BattleScreen
          isBattleOn={isBattleOn}
          toggleBattle={setIsBattleOn}
          towerFight={true}
        />
      ) : (
        <button
          className={`startArenaBattle`}
          onClick={() =>
            startBattle(dispatch, setIsBattleOn, champ, towerBossesDefeated)
          }
        >
          Start Battle
        </button>
      )}
    </TowerContainer>
  );
};

export default Tower;
