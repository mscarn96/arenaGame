import * as actionTypes from "../actions/actionTypes"

import initChamp, {ghost} from '../../game/initChamp'


export const initialState:ChampState = {currentChamp: ghost,towerBossesDefeated: 0}

const champReducer = (state:ChampState = initialState,
    action:actionTypes.ChampionAction):ChampState => {
        switch (action.type) {
            case actionTypes.CREATE_CHAMP:
                switch (action.choosedClass) {
                    case 0:
                    const warrior = initChamp(action.name, 0);
                    return {
                        ...state,
                        currentChamp:warrior,
                    }
                    case 1:
                    const mage = initChamp(action.name, 1);
                    return {
                        ...state,
                        currentChamp:mage,
                    }
                    case 2:
                    const hunter = initChamp(action.name,2);
                    return {
                        ...state,
                        currentChamp:hunter,
                    }
                    default: 
                        throw new Error(`champion class of id: ${action.choosedClass} doesn't exist`);
                }
            case actionTypes.MODIFY_CHAMP:
                return {
                    ...state,
                    currentChamp:action.champ
                }
            case actionTypes.DELETE_CHAMP:
                return initialState
            case actionTypes.DEFEAT_TOWER_BOSS:
                return {
                    ...state,
                    towerBossesDefeated:state.towerBossesDefeated + 1
                }
            default:
                return {...state};
        }
    }


//https://www.freecodecamp.org/news/how-to-use-redux-in-your-react-typescript-app/

export default champReducer;