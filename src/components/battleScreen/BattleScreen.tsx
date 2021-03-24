import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { useSelector } from "../../redux/customHooks";
import { Prompt, useHistory } from "react-router-dom";

import { basicAttack, deleteBattle } from "../../game/battle";
import { willLvlUp, getGoldFromWin } from "../../game/lvlUp";
import { damageChamp } from "../../redux/actions/battleActionCreators";
import {
  defeatTowerBoss,
  deleteChamp,
} from "../../redux/actions/champActionCreators";
import { clearInventory } from "../../redux/actions/itemActionCreators";
import { displayEnemyToasts, displayPlayerToasts } from "../../game/ui/toasts";

import Enemy from "./Enemy";
import Player from "./Player";
import BattleResult from "./BattleResult";
import { colors } from "../../game/ui/globalStyles";

interface BattleScreenProps {
  placeImg: string;
}

const BattleScreenWrapper = styled.div<BattleScreenProps>`
  background-image: url(${(props) => props.placeImg});
  background-size: cover;
  background-position: center;
  border-top: 3px solid ${colors.lighterBlue};
  width: 100vw;
  margin-bottom: 250px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  box-shadow: inset 0px 0px 50px 50px rgba(30, 30, 30, 0.89);
`;

interface Props {
  isBattleOn: boolean;
  toggleBattle: React.Dispatch<React.SetStateAction<boolean>>;
  towerFight?: boolean;
}

const BattleScreen = (props: Props) => {
  const dispatch = useDispatch();
  const [isPlayerTurn, setPlayerTurn] = useState(true);
  const [isBattleResultVisible, setBattleResultVisible] = useState(false);
  const [battleResultInfo, setBattleResultInfo] = useState<ResultInfo>();
  const [enemyAttackResultText, setEnemyAttackResultText] = useState("");
  const champ = useSelector((state) => state.battleState.champ);
  const enemy = useSelector((state) => state.battleState.enemy);
  const place = useSelector((state) => state.battleState.place);
  const [goldEarned, setGoldEarned] = useState<number>();
  const { toggleBattle } = props;
  const history = useHistory();

  ///use when player loses all HP
  const gameOver = useCallback(() => {
    dispatch(deleteChamp());
    dispatch(clearInventory());
    history.push("/");
  }, [dispatch, history]);

  useEffect(() => {
    setGoldEarned(getGoldFromWin(enemy.level));
  }, [enemy.level]);

  const handleDeleteBattle = useCallback(
    (champ: Champion) => {
      deleteBattle(champ, dispatch, toggleBattle, enemy, goldEarned);
    },
    [dispatch, toggleBattle, enemy, goldEarned]
  );

  useEffect(() => {
    const enemyTurn = setTimeout(() => {
      const playerWin = enemy.hp.currentHp <= 0;
      const enemyWin = champ.hp.currentHp <= 0;
      ///first game checks if the fight is over
      if (enemyWin) {
        setBattleResultInfo({
          playerWon: false,
          didLevelUp: false,
        });
        setBattleResultVisible(true);
      } else if (playerWin) {
        if (props.towerFight) dispatch(defeatTowerBoss());
        if (willLvlUp(champ, enemy.expForWin)) {
          setBattleResultInfo({
            playerWon: true,
            didLevelUp: true,
            expGained: enemy.expForWin,
            goldEarned,
          });
        } else {
          setBattleResultInfo({
            playerWon: true,
            didLevelUp: false,
            expGained: enemy.expForWin,
            goldEarned,
          });
        }
        setBattleResultVisible(true);
      } else if (!isPlayerTurn) {
        //if the fight is not over enemy attacks player and pass turn
        const attackResult = basicAttack(enemy, champ);
        setEnemyAttackResultText(attackResult.statusText);
        displayEnemyToasts(attackResult.statusText);
        dispatch(damageChamp(attackResult.damage));
        setPlayerTurn(true);
      }
    }, 3000);
    return () => {
      clearTimeout(enemyTurn);
    };
  }, [
    isPlayerTurn,
    champ,
    dispatch,
    enemy,
    toggleBattle,
    handleDeleteBattle,
    gameOver,
    props.towerFight,
    goldEarned,
  ]);

  if (enemy !== undefined) {
    return (
      <>
        {isBattleResultVisible && battleResultInfo ? (
          <BattleResult
            resultInfo={battleResultInfo}
            setVisible={setBattleResultVisible}
            gameOver={gameOver}
            deleteBattle={handleDeleteBattle}
            champ={champ}
            expForWin={enemy.expForWin}
            toggleBattle={toggleBattle}
          />
        ) : null}
        <BattleScreenWrapper placeImg={place.image}>
          {props.isBattleOn ? (
            <>
              <Player
                isPlayerTurn={isPlayerTurn}
                setIsPlayerTurn={setPlayerTurn}
                champ={champ}
                enemy={enemy}
                displayToast={displayPlayerToasts}
              />
              <Enemy enemy={enemy} attackResult={enemyAttackResultText} />
            </>
          ) : null}
        </BattleScreenWrapper>
        <Prompt
          when={props.isBattleOn && !isBattleResultVisible}
          message="Are you sure you want to run from this fight?"
        />
      </>
    );
  } else {
    return <div>ERROR NO ENEMY</div>;
  }
};

export default BattleScreen;
