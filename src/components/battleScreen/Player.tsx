import React from 'react'

import { useSelector } from '../../redux/customHooks'

import { getChampClass } from '../../game/gameVariousFuncs'

import ProggresBar from '../ui/ProgressBar';

const Player = () => {

    const champ = useSelector(state => state.currentChamp)
    return (
        <div>
           <h3>{champ?.name}</h3>
           {getChampClass(champ?.champClass)}
           <p>Level : {champ?.level}</p>
            <ProggresBar bgcolor={"red"} completed={45} />
        </div>
    )
}

export default Player
