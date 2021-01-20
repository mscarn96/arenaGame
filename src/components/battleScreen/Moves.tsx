import React from 'react'

import {basicAttack} from '../../game/battle'

type Props = {
    attacker:Champion | Character
    defender:Character | Champion
}

const Moves = (props:Props) => {
    return (
        <div>
            <button onClick={() => basicAttack(props.attacker, props.defender)}>Basic Attack</button>
        </div>
    )
}

export default Moves
