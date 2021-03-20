import * as actionTypes from './actionTypes';

export const createChamp = (name:string, champClass:ChampClass) => {
    const action:actionTypes.ChampionAction = {
        type:actionTypes.CREATE_CHAMP,
        name,
        choosedClass:champClass
    }
    return action;
}

export const modifyChamp = (champ:Champion) => {
    const action:actionTypes.ChampionAction = {
        type:actionTypes.MODIFY_CHAMP,
        champ
    }
    return action
}

export const deleteChamp = () => {
    const action:actionTypes.ChampionAction = {
        type:actionTypes.DELETE_CHAMP
    }
    return action
}

export const defeatTowerBoss = () => {
    const action:actionTypes.ChampionAction = {
        type:actionTypes.DEFEAT_TOWER_BOSS
    }
    return action;
}

