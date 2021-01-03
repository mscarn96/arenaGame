import React from 'react';

import styled from 'styled-components';

import Enemy from './Enemy';
import Inventory from './Inventory';
import Moves from './Moves';
import Player from './Player';

const BattleScreenWrapper = styled.div`
margin-bottom:250px;
display:flex;
justify-content:space-around;
`


const BattleScreen = () => {
    return (
        <BattleScreenWrapper>
            <Player />
            <Moves />
            <Inventory />
            <Enemy />
        </BattleScreenWrapper>
    )
}

export default BattleScreen
