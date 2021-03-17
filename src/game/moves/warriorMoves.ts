import {basicAttack} from '../battle'
import {Dispatch} from 'redux'
import { gainResource } from '../../redux/actions/battleActionCreators';
import Enemy from '../../components/battleScreen/Enemy';

export const warriorGainRes = (warrior:Champion,number:number,dispatch:Dispatch):void => {
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

export const threeHitComboEffect = (warrior:Champion, defender:Enemy):AttackResult => {
    const result:AttackResult = {
        damage : 0,
        statusText : '3-Hit Combo!',
    }
    for (let i = 0;i<3;i++){
        const damage = basicAttack(warrior,defender).damage
        result.damage += damage
    }
    return result;
}

export const executionEffect = (warrior:Champion,defender:Enemy):AttackResult => {
    const enemyHPPercent = Math.floor(defender.hp.currentHp / defender.hp.fullHp * 100)
    if (enemyHPPercent < 30) return {
        statusText : `${warrior.name} used Execution! Enemy gets executed!`,
        damage : defender.hp.currentHp
    }
    const damage = defender.hp.currentHp / enemyHPPercent * 20;
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