import {basicAttack} from '../battle'
import {Dispatch} from 'redux'
import { gainResource } from '../../redux/actions/battleActionCreators';

const warriorGainRes = (warrior:Champion,number:number,dispatch:Dispatch):void => {
        const {current} = warrior.res

        if (current + number <= 100) {
            dispatch(gainResource(number))
        } else {dispatch(gainResource(100 - current))}
}


export const warriorBasicAttack = (warrior:Champion, defender:Enemy,dispatch:Dispatch):AttackResult => {
    const result = basicAttack(warrior,defender);
    if (result.damage > 0) {
        warriorGainRes(warrior,20,dispatch)
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

const weaponThrowEffect = (warrior:Champion,defender:Enemy):AttackResult => {
    const randomAttNum = Math.round(Math.random() * 180);
    const randomDefNum = Math.round(Math.random() * 100);
    let damage = (warrior.attackDamage * randomAttNum) / 50 - (defender.armor * randomDefNum) / 5;
    damage = Math.floor(damage)
    const isDamagePositive = damage > 1;
    const statusText = `${warrior.name} used Weapon Throw${isDamagePositive ? `! It dealt ${damage} damage!` : `, but it missed!`}`
    if (isDamagePositive) {return {
        statusText,
        damage
    }} else return {
        statusText,
        damage:0
    }
}

const disarmEffect = (warrior:Champion,defender:Enemy):TurnResult => {
    const randomAttNum = Math.round(Math.random() * 200);
    const randomDefNum = Math.round(Math.random() * 100);
    const {blockChance} = defender;
    const effectNumber = randomAttNum - randomDefNum
    if (effectNumber > 0) {
        if (effectNumber > blockChance)
         {return {
            statusText:`${warrior.name} used Disarm! ${defender.name}'s Block Chance is now ${Math.floor(blockChance / 2)}!`,
            effectNumber:Math.floor(blockChance / 2),
         }} 
         else return {
            statusText:`${warrior.name} used Disarm! ${defender.name}'s Block Chance is now ${Math.floor(blockChance - blockChance / 3)}!`,
            effectNumber:Math.floor(blockChance / 3),
         }
    } else return {statusText:`${warrior.name} tried to use Disarm but it failed!`,
    effectNumber:0}
}

const shockwaveEffect = (warrior:Champion,defender:Enemy):TurnResult => {
    const randomAttNum = Math.round(Math.random() * 200);
    const randomDefNum = Math.round(Math.random() * 100);
    const {dodgeChance} = defender;
    const effectNumber = randomAttNum - randomDefNum
    if (effectNumber > 0) {
        if (effectNumber > dodgeChance)
         {return {
            statusText:`${warrior.name} used Shockwave! ${defender.name}'s Dodge Chance is now ${Math.floor(dodgeChance / 2)}!`,
            effectNumber:Math.floor(dodgeChance / 2),
         }} 
         else return {
            statusText:`${warrior.name} used Shockwave! ${defender.name}'s Dodge Chance is now ${Math.floor(dodgeChance - dodgeChance / 3)}!`,
            effectNumber:Math.floor(dodgeChance / 3),
         }
    } else return {statusText:`${warrior.name} tried to use Shockwave but it failed!`,
    effectNumber:0}
}

export const ThreeHitCombo:AttackSkill = {
    id:211,
    type:`DAMAGE`,
    name:`Three Hit Combo`,
    effect:threeHitComboEffect,
    cost:50,
}

export const Execution:AttackSkill = {
    id:212,
    type:`DAMAGE`,
    name:`Execution`,
    effect:executionEffect,
    cost:60
}

export const WeaponThrow:AttackSkill = {
    id:213,
    type:`DAMAGE`,
    name:`Weapon Throw`,
    effect:weaponThrowEffect,
    cost:30
}

export const Disarm:EffectSkill = {
    id:214,
    type:`EFFECT`,
    name:`Disarm`,
    stat:`blockChance`,
    effect:disarmEffect,
    cost:20
}

export const Shockwave:EffectSkill = {
    id:215,
    type:`EFFECT`,
    name:`Shockwave`,
    stat:`dodgeChance`,
    effect:shockwaveEffect,
    cost:20
}