import React from 'react';

import { useSelector } from '../../redux/customHooks'
import styled from 'styled-components';

import Enemy from './Enemy';
import Player from './Player';


const BattleScreenWrapper = styled.div`
margin-bottom:250px;
display:flex;
justify-content:space-around;
`


const BattleScreen = () => {
    const champ = useSelector(state => state.battleState.champ)
    const enemy = useSelector(state => state.battleState.enemy)
    if (enemy !== undefined) {return (
        <BattleScreenWrapper>
            <Player champ={champ} enemy={enemy}/>
            <Enemy enemy={enemy}/>
        </BattleScreenWrapper>
    )} else {return (
        <div>
            ERROR NO ENEMY
        </div>
    )}
    
}

export default BattleScreen
