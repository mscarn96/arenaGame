import * as actionTypes from './actionTypes';

export const createChamp = (name:string, champClass:ChampClass) => {
    const action:ChampionAction = {
        type:actionTypes.CREATE_CHAMP,
        name,
        choosedClass:champClass
    }
    return action;
}