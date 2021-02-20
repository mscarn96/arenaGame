import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../redux/customHooks';


import { basicAttack,addExpAndcheckLvlUp } from '../../game/battle';
import { damageChamp, endBattle } from '../../redux/actions/battleActionCreators';
import { modifyChamp } from '../../redux/actions/initActionCreators';

import Enemy from './Enemy';
import Player from './Player';


const BattleScreenWrapper = styled.div`
margin-bottom:250px;
display:flex;
justify-content:space-around;
`;

const DeleteButton = styled.button`
position:absolute;
`;

interface Props {
    isBattleOn: boolean,
    toggleBattle: React.Dispatch<React.SetStateAction<boolean>>;
}

const deleteBattle = (champ: Champion, dispatch: Dispatch<any>, toggleBattle: React.Dispatch<React.SetStateAction<boolean>>,expFromWin:number): void => {
    const champToReplace = addExpAndcheckLvlUp(champ,expFromWin)
    dispatch(modifyChamp(champToReplace));
    toggleBattle(false);
    dispatch(endBattle());
};



const BattleScreen = (props: Props) => {
    const dispatch = useDispatch();
    const [isPlayerTurn, setIsPlayerTurn] = useState(true);
    const [enemyAttackResultText, setEnemyAttackResultText] = useState('');
    const champ = useSelector(state => state.battleState.champ);
    const enemy = useSelector(state => state.battleState.enemy);
    const { toggleBattle } = props;


    const handleDeleteBattle = useCallback((champ: Champion) => {
        deleteBattle(
            champ,
            dispatch,
            toggleBattle,
            enemy.expForWin)}, [dispatch, toggleBattle,enemy.expForWin]);


    const EndBattleBtn = () => {
        const champToReplace = useSelector(state => state.battleState.champ);
        return (
            <DeleteButton onClick={() => deleteBattle(
                champToReplace,
                dispatch,
                toggleBattle,
                enemy.expForWin)}>End</DeleteButton>
        );
    };


    useEffect(() => {
        const enemyTurn = setTimeout(() => {
            const playerWin = enemy.hp.currentHp <= 0
            const enemyWin = champ.hp.currentHp <= 0
            if (enemyWin) {
                handleDeleteBattle(champ);
                toggleBattle(false);
            } else if (playerWin) {
                const champToReplace = { ...champ };
                champToReplace.exp = champ.exp + enemy.expForWin;
                handleDeleteBattle(champToReplace);
                toggleBattle(false);
            }else if (!isPlayerTurn) {
                const attackResult = basicAttack(enemy, champ);
                setEnemyAttackResultText(attackResult.statusText);
                dispatch(damageChamp(attackResult.damage));
                setIsPlayerTurn(true);
            }
        }, 1000);
        return () => {
            clearTimeout(enemyTurn);
        };
    }, [isPlayerTurn, champ, dispatch, enemy, toggleBattle, handleDeleteBattle]);


    if (enemy !== undefined) {
        return (
            <BattleScreenWrapper>
                {props.isBattleOn
                    ? <>
                        <Player isPlayerTurn={isPlayerTurn} setIsPlayerTurn={setIsPlayerTurn} champ={champ} enemy={enemy} />
                        <Enemy enemy={enemy} attackResult={enemyAttackResultText} />
                    </>
                    : <EndBattleBtn />}
            </BattleScreenWrapper>
        );
    } else {
        return (
            <div>
                ERROR NO ENEMY
            </div>
        );
    }

};

export default BattleScreen;
