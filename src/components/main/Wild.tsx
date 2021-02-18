import React, { useState } from 'react'
import { useSelector } from '../../redux/customHooks';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import { initBattle } from '../../redux/actions/battleActionCreators';

import BattleScreen from '../battleScreen/BattleScreen'
import graveyardMobs from '../../game/monsters/graveyardMobs'
import Graveyard from '../../game/places/Graveyard'



const startBattle = (dispatch:Dispatch<any>,
    setIsBattleOn:React.Dispatch<React.SetStateAction<boolean>>,
    champ:Champion) => {
    const enemy = graveyardMobs[Math.floor(Math.random() * graveyardMobs.length)];
    const place = Graveyard;
    setIsBattleOn(true);
    dispatch(initBattle(champ,enemy,place))
}; 


const Wild = () => {
    const [isBattleOn,setIsBattleOn] = useState<boolean>(false);
    const champ = useSelector(state => state.champion.currentChamp);
    const dispatch = useDispatch();
     ////ZROB UNIWERSALNA FUNKCKJE

                
    return (<div>
        {isBattleOn 
        ? <BattleScreen isBattleOn={isBattleOn} toggleBattle={setIsBattleOn}/>
        :   <div>
            <button onClick={() => startBattle(dispatch,setIsBattleOn,champ)}>Explore Graveyard - Levels 1 - 3</button>
            <button>Explore Forest - Levels 3 - 5</button>
            </div>}
    </div>)
            
}

export default Wild
