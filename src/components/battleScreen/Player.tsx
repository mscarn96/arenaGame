import React from "react";

import Moves from "./Moves";
import ProgressBar from "../ui/ProgressBar";
import styled from "styled-components";
import { colors } from "../../game/ui/globalStyles";

export const getResBarColor = (champ: Champion | null): string => {
  switch (champ?.res.name) {
    case "mana":
      return "blue";
    case "rage":
      return "red";
    case "focus":
      return "yellow";
    default:
      return "gray";
  }
};

type Props = {
  champ: Champion;
  enemy: Enemy;
  isPlayerTurn: boolean;
  setIsPlayerTurn: React.Dispatch<React.SetStateAction<boolean>>;
  displayToast: (text: string) => void;
};

const PlayerContainer = styled.div`
  h3,
  p {
    margin: 10px;
    text-align: center;
  }
  h3 {
    height: 50px;
  }
  .imageChamp {
    position: relative;
    margin: 5px;
    display: flex;
    justify-content: center;
  }
  .imageChamp img {
    max-width: 100px;
    height: 150px;
    border: 2px solid ${colors.lightBlue};
    border-radius: 5px;
  }
  .imageChamp span {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    font-family: sans-serif;
    font-size: 0.5rem;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
  }

  .bars {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .imageChamp img {
      max-width: 150px;
      height: 200px;
    }
  }
  @media (min-width: 1024px) {
    .imageChamp img {
      max-width: 180px;
      height: 250px;
    }
  }
`;

const Player = (props: Props) => {
  const { champ } = props;
  return (
    <PlayerContainer>
      <h3>{champ.name}</h3>
      <div className={`imageChamp`}>
        <img src={champ.image} alt={`img of ${champ.name}`} />
        {champ.imgCred ? <span>Image by {champ.imgCred}</span> : null}
      </div>

      <p>Level : {champ.level}</p>
      <div className={`bars`}>
        <ProgressBar
          width={70}
          bgcolor={"green"}
          current={champ.hp.currentHp ?? 0}
          total={champ.hp.fullHp ?? 0}
        />
        <ProgressBar
          width={70}
          bgcolor={getResBarColor(champ)}
          current={champ.res.current ?? 0}
          total={champ.res.full ?? 0}
        />
      </div>
      <Moves
        isPlayerTurn={props.isPlayerTurn}
        setIsPlayerTurn={props.setIsPlayerTurn}
        displayToast={props.displayToast}
      />
    </PlayerContainer>
  );
};

export default Player;
