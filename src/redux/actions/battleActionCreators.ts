import * as actionTypes from './actionTypes';

export const damageChamp = (damage:number) => {
    const action:actionTypes.BattleAction = {
        type:actionTypes.DAMAGE_CHAMPION,
        damage
    }
    return action
}

export const consumeResource = (cost:number) => {
    const action:actionTypes.BattleAction = {
        type:actionTypes.USE_RESOURCE,
        cost
    }
    return action
}

export const healChamp = (heal:number) => {
    const action:actionTypes.BattleAction = {
        type:actionTypes.HEAL_CHAMPION,
        heal
    }
    return action
}

export const damageEnemy = (damage:number) => {
    const action:actionTypes.BattleAction = {
        type:actionTypes.DAMAGE_ENEMY,
        damage
    }
    return action
}

export const initBattle = (champ:Champion,enemy:Enemy, place:Place) => {
    const action:actionTypes.BattleAction = {
        type:actionTypes.INIT_BATTLE,
        champ,
        enemy,
        place
    }
    return action;
}

export const endBattle = () => {
    const action:actionTypes.BattleAction = {
        type:actionTypes.END_BATTLE,
    }
    return action;
}