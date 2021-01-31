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