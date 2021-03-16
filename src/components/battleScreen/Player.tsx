import React from "react";

import { getChampClass } from "../../game/gameVariousFuncs";

import Moves from "./Moves";
import ProgressBar from "../ui/ProgressBar";

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

const Player = (props: Props) => {
  const { champ } = props;
  return (
    <div>
      <h3>{champ.name}</h3>
      {getChampClass(champ.champClass)}
      <p>Level : {champ.level}</p>
      <ProgressBar
        width={100}
        bgcolor={"green"}
        current={champ.hp.currentHp ?? 0}
        total={champ.hp.fullHp ?? 0}
      />
      <ProgressBar
        width={100}
        bgcolor={getResBarColor(champ)}
        current={champ.res.current ?? 0}
        total={champ.res.full ?? 0}
      />
      <Moves
        isPlayerTurn={props.isPlayerTurn}
        setIsPlayerTurn={props.setIsPlayerTurn}
        displayToast={props.displayToast}
      />
    </div>
  );
};

export default Player;
