import * as actionTypes from "./actionTypes"

import initChamp, {ghost} from '../game/initChamp'


const initialState: GameState = {
   currentChamp:ghost,
   gold:0,
   inventory:null,
}


const reducer = (state:GameState = initialState,
    action:ChampionAction):GameState => {
        switch (action.type) {
            case actionTypes.CREATE_CHAMP:
                switch (action.choosedClass) {
                    case 0:
                    const warrior = initChamp(action.name, 0);
                    return {
                        currentChamp:warrior,
                        gold:0,
                        inventory:[]
                    }
                    case 1:
                    const mage = initChamp(action.name, 1);
                    return {
                        currentChamp:mage,
                        gold:0,
                        inventory:[]
                    }
                    case 2:
                    const hunter = initChamp(action.name,2);
                    return {
                        currentChamp:hunter,
                        gold:0,
                        inventory:[]
                    }
                    default: 
                        throw new Error(`champion class of id: ${action.choosedClass} doesn't exist`);
                }
            case actionTypes.MODIFY_CHAMP: {
                return initialState;
            }
        
            default:
                return initialState;
        }
    }


//https://www.freecodecamp.org/news/how-to-use-redux-in-your-react-typescript-app/

export default reducer;