import { ghost } from "../../game/initChamp";
import Graveyard from "../../game/places/Graveyard";
import * as actionTypes from "../actions/actionTypes"


const initialState:BattleState = {
    champ:ghost,
    enemy:ghost,
    place:Graveyard
}

const battleReducer = (state = initialState, action: actionTypes.BattleAction): BattleState => {
    const {champ} = state;
    switch (action.type) {
        case actionTypes.DAMAGE_CHAMPION:
            if (action.damage < champ.hp.currentHp) {
                const hpbefore:number = champ.hp.currentHp
                return {
                    ...state,
                    champ: {
                        ...champ,
                        hp: {
                            ...champ.hp,
                            currentHp: hpbefore - action.damage,
                        }
                    }

                }
            } else return { ...state };

        case actionTypes.HEAL_CHAMPION:
            if (action.heal + champ.hp.currentHp <= champ.hp.fullHp) {
                return {
                    ...state,
                    champ:{
                        ...champ,
                        hp:{
                            ...champ.hp,
                            currentHp: champ.hp.currentHp + action.heal,
                        }
                    }
                }
            } else return {
                ...state,
                champ:{
                    ...champ,
                    hp:{
                        ...champ.hp,
                        currentHp:champ.hp.fullHp
                    }
                }
            }

            case actionTypes.DAMAGE_ENEMY:
                if (state?.enemy?.hp !== undefined) {
                    if (action.damage < state?.enemy?.hp.currentHp) {
                        const {enemy} = state;
                        return {...state,
                            enemy:{
                                ...enemy,
                                hp:{
                                    ...enemy.hp,
                                    currentHp:enemy.hp.currentHp - action.damage
                                }
                            }
                        }
                    } else return { ...state }  
                } else return {...state}

                case actionTypes.INIT_BATTLE: 
                    return {
                            ...state,
                            champ: action.champ,
                            enemy: action.enemy,
                            place: action.place
                        }             
                case actionTypes.END_BATTLE:
                    return {
                        ...state,
                        champ:ghost,
                        enemy:ghost,
                        place:Graveyard}

            default:
                return { ...state }    
                } 
                
                
    
    }

export default battleReducer