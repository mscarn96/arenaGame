import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../redux/customHooks';
import { useHistory } from "react-router-dom";


import { basicAttack,addExpAndcheckLvlUp,getGoldFromWin} from '../../game/battle';
import { damageChamp, endBattle } from '../../redux/actions/battleActionCreators';
import { modifyChamp,deleteChamp} from '../../redux/actions/champActionCreators';
import {displayEnemyToasts,displayPlayerToasts} from '../ui/toasts'

import Enemy from './Enemy';
import Player from './Player';
import { addGold, clearInventory } from '../../redux/actions/itemActionCreators';


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

const deleteBattle = (champ: Champion,
    dispatch: Dispatch<any>,
    toggleBattle: React.Dispatch<React.SetStateAction<boolean>>,
    enemy:Enemy): void => {
    const champToReplace = addExpAndcheckLvlUp(champ,enemy.expForWin)
    const goldWon = getGoldFromWin(enemy.level)
    dispatch(addGold(goldWon))
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
    const history = useHistory();

    const gameOver = useCallback(() => {
        dispatch(deleteChamp())
        dispatch(clearInventory())
        history.push("/")
    },[dispatch,history])

    const handleDeleteBattle = useCallback((champ: Champion) => {
        deleteBattle(
            champ,
            dispatch,
            toggleBattle,
            enemy)}, [dispatch, toggleBattle,enemy]);


    const EndBattleBtn = () => {
        const champToReplace = useSelector(state => state.battleState.champ);
        return (
            <DeleteButton onClick={() => deleteBattle(
                champToReplace,
                dispatch,
                toggleBattle,
                enemy)}>End</DeleteButton>
        );
    };
    
    useEffect(() => {
        const enemyTurn = setTimeout(() => {
            const playerWin = enemy.hp.currentHp <= 0
            const enemyWin = champ.hp.currentHp <= 0
            if (enemyWin) {
                handleDeleteBattle(champ);
                toggleBattle(false);
                gameOver();
            } else if (playerWin) {
                const champToReplace = { ...champ };
                champToReplace.exp = champ.exp + enemy.expForWin;
                handleDeleteBattle(champToReplace);
                toggleBattle(false);
            }else if (!isPlayerTurn) {
                const attackResult = basicAttack(enemy, champ);
                setEnemyAttackResultText(attackResult.statusText);
                displayEnemyToasts(attackResult.statusText)
                dispatch(damageChamp(attackResult.damage));
                setIsPlayerTurn(true);
            }
        }, 1000);
        return () => {
            clearTimeout(enemyTurn);
        };
    }, [isPlayerTurn, champ, dispatch, enemy, toggleBattle, handleDeleteBattle,gameOver]);


    if (enemy !== undefined) {
        return (
            <>
            <ToastContainer
                            position="bottom-left"
                            autoClose={5000}
                            hideProgressBar
                            closeOnClick={false}
                            closeButton={false}
                            rtl={false}
                            pauseOnFocusLoss={false}
                            draggable={false}
                            pauseOnHover/>      
            <BattleScreenWrapper>
                {props.isBattleOn
                    ? <>
                        <Player isPlayerTurn={isPlayerTurn} setIsPlayerTurn={setIsPlayerTurn} champ={champ} enemy={enemy} displayToast={displayPlayerToasts}/>
                        <Enemy enemy={enemy} attackResult={enemyAttackResultText} />
                    </>
                    : <EndBattleBtn />}
            </BattleScreenWrapper>
            </>
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
