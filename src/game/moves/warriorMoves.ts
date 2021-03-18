import {basicAttack} from '../battle'
import {Dispatch} from 'redux'
import { gainResource } from '../../redux/actions/battleActionCreators';
import Enemy from '../../components/battleScreen/Enemy';

const warriorGainRes = (warrior:Champion,number:number,dispatch:Dispatch):void => {
        const {current} = warrior.res

        if (current + number <= 100) {
            dispatch(gainResource(number))
        } else {dispatch(gainResource(100 - current))}
}


export const warriorBasicAttack = (warrior:Champion, defender:Enemy,dispatch:Dispatch):AttackResult => {
    const result = basicAttack(warrior,defender);
    if (result.damage > 0) {
        warriorGainRes(warrior,10,dispatch)
    }
    return result;
}

const threeHitComboEffect = (warrior:Champion, defender:Enemy):AttackResult => {
    let damage = 0
    for (let i = 0;i<3;i++){
        damage += basicAttack(warrior,defender).damage
    }
    return {
        damage,
        statusText : `3-Hit Combo! Hits dealt ${damage} damage! `,
    };
}
const executionEffect = (warrior:Champion,defender:Enemy):AttackResult => {
    const enemyHPPercent = Math.floor(defender.hp.currentHp / defender.hp.fullHp * 100)
    if (enemyHPPercent < 30) return {
        statusText : `${warrior.name} used Execution! Enemy gets executed!`,
        damage : defender.hp.currentHp
    }
    const damage = Math.floor(defender.hp.currentHp / enemyHPPercent * 20);
    return {
        statusText: `${warrior.name} tried to use Execution, but enemy is too healthy! Still it dealt ${damage} damage!`,
        damage
    }
}

export const ThreeHitCombo:AttackSkill = {
    id:211,
    type:`DAMAGE`,
    name:`Three Hit Combo`,
    effect:threeHitComboEffect,
    cost:40,
}

export const Execution:AttackSkill = {
    id:212,
    type:`DAMAGE`,
    name:`Execution`,
    effect:executionEffect,
    cost:70
}