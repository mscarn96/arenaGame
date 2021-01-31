import React, {useState} from 'react'
import BattleScreen from '../battleScreen/BattleScreen'
import {initBattle, endBattle} from '../../redux/actions/battleActionCreators';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../redux/customHooks'
import UndeadLion from '../../game/monsters/graveyard/UndeadLion'
import Graveyard from '../../game/places/Graveyard'
import { modifyChamp } from '../../redux/actions/initActionCreators';


const Practice = () => {
    const [isBattleOn,setIsBattleOn] = useState(false)
    const [isBattleFinished,setIsBattleFinished] = useState(false)
    const [isPlayerTurn,setIsPlayerTurn] = useState(true)
    const dispatch = useDispatch();
    const champ = useSelector(state => state.champion.currentChamp)
    const enemy = UndeadLion;
    const place = Graveyard

    const startBattle = ():void => {
        setIsBattleOn(true);
        dispatch(initBattle(champ,enemy,place))
    }

    const deleteBattle = (champToReplace:Champion):void => {
        dispatch(modifyChamp(champToReplace))
        setIsBattleOn(false);
        dispatch(endBattle())

    }

    const DeleteBattleBtn = () => {
        const champToReplace = useSelector(state => state.battleState.champ)
        return (
            <button onClick={() => deleteBattle(champToReplace)}>End</button>
    )}

    const StartBattleBtn = () => {
        return (
        <>
        <button onClick={() => startBattle()}>Start</button>
        <button onClick={() => setIsBattleFinished(true)}>Finish</button>
        </>)
    }
    return (
        <div>
            {isBattleFinished ? <DeleteBattleBtn /> : null} 
            <StartBattleBtn />
            {isBattleOn ? <BattleScreen /> : null}
        </div>
    )
}

export default Practice;