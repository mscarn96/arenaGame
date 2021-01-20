import React from 'react'


import ProgressBar from '../ui/ProgressBar';

type Props = {
    enemy:Champion | Character
}

const Enemy = (props:Props) => {
    const {enemy} = props;
    return (
        <div>
           <h3>{enemy.name}</h3>
           <p>Level : {enemy.level}</p>
            <ProgressBar bgcolor={"green"} current={enemy.hp.currentHp ?? 0} total={enemy.hp.fullHp ?? 0} />
        </div>
    )
}
    

export default Enemy
