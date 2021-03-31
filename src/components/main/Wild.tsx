import React, { useState } from "react";
import { useSelector } from "../../redux/customHooks";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

import { initBattle } from "../../redux/actions/battleActionCreators";

import BattleScreen from "../battleScreen/BattleScreen";
import graveyardMobs from "../../game/monsters/graveyardMobs";
import forestMobs from "../../game/monsters/forestMobs";
import frostlandMobs from "../../game/monsters/frostlandMobs";
import Graveyard from "../../game/places/Graveyard";
import Forest from "../../game/places/Forest";
import Frostland from "../../game/places/Frostland";
import styled from "styled-components";
import { colors } from "../../game/ui/globalStyles";

const startBattle = (
  dispatch: Dispatch<any>,
  setIsBattleOn: React.Dispatch<React.SetStateAction<boolean>>,
  champ: Champion,
  place: Place,
  mobs: Character[]
) => {
  ///get random enemy from given set
  const enemy = mobs[Math.floor(Math.random() * mobs.length)];
  setIsBattleOn(true);
  dispatch(initBattle(champ, enemy, place));
};

const WildContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 85vh;
  justify-content: space-around;

  button {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    font-size: 1.3rem;
    font-family: "Cormorant Unicase", sans-serif;
    border: 3px solid ${colors.lightBlue};
    border-radius: 5px;
    color: ${colors.white};
    height: 25%;
    box-shadow: inset 0px 0px 50px 50px rgba(30, 30, 30, 0.89);
    margin-bottom: 15px;
  }

  button:nth-of-type(1) {
    background-image: url(${Graveyard.image});
  }
  button:nth-of-type(2) {
    background-image: url(${Forest.image});
  }
  button:nth-of-type(3) {
    background-image: url(${Frostland.image});
  }
`;

const Wild = () => {
  const [isBattleOn, setIsBattleOn] = useState<boolean>(false);
  const champ = useSelector((state) => state.champion.currentChamp);
  const dispatch = useDispatch();

  return (
    <>
      {isBattleOn ? (
        <BattleScreen isBattleOn={isBattleOn} toggleBattle={setIsBattleOn} />
      ) : (
        <WildContainer>
          <button
            onClick={() =>
              startBattle(
                dispatch,
                setIsBattleOn,
                champ,
                Graveyard,
                graveyardMobs
              )
            }
          >
            Explore Graveyard - Levels 1 - 3
          </button>
          <button
            onClick={() =>
              startBattle(dispatch, setIsBattleOn, champ, Forest, forestMobs)
            }
          >
            Explore Forest - Levels 3 - 5
          </button>
          <button
            onClick={() =>
              startBattle(
                dispatch,
                setIsBattleOn,
                champ,
                Frostland,
                frostlandMobs
              )
            }
          >
            Explore Frostland - Levels 6 - 9
          </button>
        </WildContainer>
      )}
    </>
  );
};

export default Wild;
