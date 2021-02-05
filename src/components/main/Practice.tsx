import React, {useState} from 'react'
import BattleScreen from '../battleScreen/BattleScreen'
import {initBattle} from '../../redux/actions/battleActionCreators';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../redux/customHooks'
import Graveyard from '../../game/places/Graveyard'

import PracticeDummy from '../../game/monsters/PracticeDummy';


const Practice = () => {
    const [isBattleOn,setIsBattleOn] = useState(false)
    const [practiceDummyLvl,setPracticeDummyLvl] = useState(1)
    const dispatch = useDispatch();
    const enemy = PracticeDummy(practiceDummyLvl)
    const champ = useSelector(state => state.champion.currentChamp)
    const place = Graveyard

    const practiceDummyLvls = [1,2,3,4,5,6,7,8,9]

    const startBattle = ():void => {
        setIsBattleOn(true);
        dispatch(initBattle(champ,enemy,place))
    }




    return (
        <div>
            <select value={practiceDummyLvl} onChange={(e) => setPracticeDummyLvl(parseInt(e.target.value))}>
                {practiceDummyLvls.map((lvl) => {return (<option key={lvl} value={lvl}>{lvl}</option>)})}
            </select>
            <button onClick={() => startBattle()}>Start</button>
            {isBattleOn ? <BattleScreen isBattleOn={isBattleOn} toggleBattle={setIsBattleOn} /> : null}
        </div>
    )
}

export default Practice;