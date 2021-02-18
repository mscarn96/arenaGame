import React, {useState,useEffect} from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux'
import { useSelector } from '../../redux/customHooks'


import { basicAttack } from '../../game/battle';
import {damageChamp,endBattle} from '../../redux/actions/battleActionCreators'
import { modifyChamp } from '../../redux/actions/initActionCreators';

import Enemy from './Enemy';
import Player from './Player';


const BattleScreenWrapper = styled.div`
margin-bottom:250px;
display:flex;
justify-content:space-around;
`

const DeleteButton = styled.button`
position:absolute;
`

interface Props {
    isBattleOn:boolean,
    toggleBattle:React.Dispatch<React.SetStateAction<boolean>>
}




const BattleScreen = (props:Props) => {
    const dispatch = useDispatch();
    const [isPlayerTurn,setIsPlayerTurn] = useState(true)
    const [enemyAttackResultText, setEnemyAttackResultText] = useState('')
    const champ = useSelector(state => state.battleState.champ)
    const enemy = useSelector(state => state.battleState.enemy)
    const {toggleBattle} = props;

    const deleteBattle = (champToReplace:Champion):void => {
        dispatch(modifyChamp(champToReplace))
        toggleBattle(false);
        dispatch(endBattle())

    }

    const EndBattleBtn = () => {
        const champToReplace = useSelector(state => state.battleState.champ)
        return (
            <DeleteButton onClick={() => deleteBattle(champToReplace)}>End</DeleteButton>
    )}


    useEffect(() => {
            const enemyTurn = setTimeout(() => {
                if (champ.hp.currentHp <= 0) {
                    toggleBattle(false)
                } else if (enemy.hp.currentHp <= 0) {
                    toggleBattle(false)
                }
                if (!isPlayerTurn) {
                    const attackResult = basicAttack(enemy,champ)
                    setEnemyAttackResultText(attackResult.statusText)
                    dispatch(damageChamp(attackResult.damage))
                    setIsPlayerTurn(true)
                }
            }, 1000)
        return () => {
            clearTimeout(enemyTurn)
        }
    }, [isPlayerTurn,champ,dispatch,enemy,toggleBattle])

    if (enemy !== undefined) {return (
        <BattleScreenWrapper>
            {props.isBattleOn 
            ? <>
            <Player isPlayerTurn={isPlayerTurn} setIsPlayerTurn={setIsPlayerTurn} champ={champ} enemy={enemy}/>
            <Enemy enemy={enemy} attackResult={enemyAttackResultText}/>
            </>
            /// Ogarnij przesylanie obitego champa do global state
            : <EndBattleBtn /> }
        </BattleScreenWrapper>
    )} else {return (
        <div>
            ERROR NO ENEMY
        </div>
    )}
    
}

export default BattleScreen
