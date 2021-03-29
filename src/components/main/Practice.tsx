import React, { useState } from "react";
import BattleScreen from "../battleScreen/BattleScreen";
import { initBattle } from "../../redux/actions/battleActionCreators";
import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/customHooks";
import PracticeField from "../../game/places/PracticeField";

import PracticeDummy from "../../game/monsters/PracticeDummy";
import styled from "styled-components";
import { ButtonStyles, colors } from "../../game/ui/globalStyles";

const PracticeContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 50px;
  background-image: url(${PracticeField.image});
  background-size: cover;
  background-position: center;
  border-top: 3px solid ${colors.lighterBlue};
  box-shadow: inset 0px 0px 50px 50px rgba(30, 30, 30, 0.89);

  h1 {
    font-size: 1.5rem;
    color: ${colors.darkBlue};
  }
  div select {
    width: 100%;
    margin: 5px;
    background-color: ${colors.darkBlue};
    color: ${colors.lightBlue};
    font-size: 1rem;
    border-radius: 5px;
    font-family: "Cormorant Unicase", sans-serif;
  }

  button {
    ${ButtonStyles};
    font-size: 1.2rem;
    font-family: "Cormorant Unicase", sans-serif;
    margin-bottom: 80px;
  }
`;

const Practice = () => {
  const [isBattleOn, setIsBattleOn] = useState(false);
  const [practiceDummyLvl, setPracticeDummyLvl] = useState(1);
  const dispatch = useDispatch();
  const enemy = PracticeDummy(practiceDummyLvl);
  const champ = useSelector((state) => state.champion.currentChamp);
  const place = PracticeField;

  const practiceDummyLvls = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const startBattle = (): void => {
    setIsBattleOn(true);
    dispatch(initBattle(champ, enemy, place));
  };

  return (
    <>
      {isBattleOn ? (
        <BattleScreen
          isBattleOn={isBattleOn}
          toggleBattle={setIsBattleOn}
          practiceFight={true}
        />
      ) : (
        <PracticeContainer>
          <div>
            <h1>Practice dummy level:</h1>
            <select
              value={practiceDummyLvl}
              onChange={(e) => setPracticeDummyLvl(parseInt(e.target.value))}
            >
              {practiceDummyLvls.map((lvl) => {
                return (
                  <option key={lvl} value={lvl}>
                    {lvl}
                  </option>
                );
              })}
            </select>
          </div>

          <button onClick={() => startBattle()}>Start</button>
        </PracticeContainer>
      )}
    </>
  );
};

export default Practice;
