import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { useDispatch } from 'react-redux';
import { useSelector } from '../../redux/customHooks';
import { useHistory } from "react-router-dom";


import { basicAttack,deleteBattle} from '../../game/battle';
import { damageChamp } from '../../redux/actions/battleActionCreators';
import { deleteChamp } from '../../redux/actions/champActionCreators';
import { clearInventory } from '../../redux/actions/itemActionCreators';
import {displayEnemyToasts,displayPlayerToasts} from '../ui/toasts'

import Enemy from './Enemy';
import Player from './Player';



const BattleScreenWrapper = styled.div`
margin-bottom:250px;
display:flex;
justify-content:space-around;
`;



interface Props {
    isBattleOn: boolean,
    toggleBattle: React.Dispatch<React.SetStateAction<boolean>>;
}




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
                    : null}
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
