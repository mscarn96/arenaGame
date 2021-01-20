import React from 'react'

import { getChampClass } from '../../game/gameVariousFuncs'

import Inventory from './Inventory';
import Moves from './Moves';
import ProgressBar from '../ui/ProgressBar';

const getResBarColor = (champ:Champion | null ):string => {
    let color:string = '';
    switch (champ?.res.name){
        case 'mana':
           color = 'blue';
            break;
        case 'rage':
            color = 'red';
            break;
        case 'focus':
            color = 'yellow';
            break;
        default:
            color = 'gray';
    }
    return color;
}

type Props = {
    champ:Champion
    enemy:Character | Champion
}

const Player = (props:Props) => {
    const {champ} = props
    return (
        <div>
           <h3>{champ?.name}</h3>
           {getChampClass(champ?.champClass)}
           <p>Level : {champ?.level}</p>
            <ProgressBar bgcolor={"green"} current={champ?.hp.currentHp ?? 0} total={champ?.hp.fullHp ?? 0} />
            <ProgressBar bgcolor={getResBarColor(champ)} current={champ?.res.current ?? 0} total={champ?.res.full ?? 0} />
            <Moves attacker={champ} defender={props.enemy}/>
            <Inventory />
        </div>
    )
}

export default Player
