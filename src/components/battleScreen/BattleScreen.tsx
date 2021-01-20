import React from 'react';

import { useSelector } from '../../redux/customHooks'

import styled from 'styled-components';
import { Battle} from '../../game/battle';

import Enemy from './Enemy';
import Player from './Player';
import UndeadLion from '../../game/monsters/graveyard/UndeadLion'

import Graveyard from '../../game/places/Graveyard'

const BattleScreenWrapper = styled.div`
margin-bottom:250px;
display:flex;
justify-content:space-around;
`


const BattleScreen = () => {
    const champ = useSelector(state => state.currentChamp);
    const enemy = UndeadLion;

    const battle = new Battle(champ,enemy,Graveyard)
    return (
        <BattleScreenWrapper>
            <Player champ={champ} enemy={UndeadLion}/>
            <Enemy enemy={UndeadLion}/>
        </BattleScreenWrapper>
    )
}

export default BattleScreen
