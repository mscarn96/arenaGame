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
                const hpbefore:number = champ.hp.currentHp
                const {damage} = action
                if (damage > 0){
                    if (damage > hpbefore) {
                        return {...state,
                        champ:{
                            ...champ,
                            hp: {
                                ...champ.hp,
                                currentHp:0}
                        }}
                    } else return {
                    ...state,
                    champ: {
                        ...champ,
                        hp: {
                            ...champ.hp,
                            currentHp: hpbefore - damage,
                        }
                    }

                }}else return {...state}
                


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

            case actionTypes.USE_RESOURCE:
                 return {
                     ...state,
                     champ:{
                         ...champ,
                         res:{
                             ...champ.res,
                             current:champ.res.current - action.cost
                         }
                     }
                 }

        case actionTypes.DAMAGE_ENEMY:
                if (state?.enemy?.hp !== undefined) {
                    const {enemy} = state;
                    const hpBefore = enemy.hp.currentHp
                    const {damage} = action
                    if (damage > 0){
                        if (damage > hpBefore) {
                            return {...state,
                            enemy:{
                                ...enemy,
                                hp:{
                                    ...enemy.hp,
                                    currentHp:0
                                }
                            }}
                        }
                        return {...state,
                        enemy:{
                            ...enemy,
                            hp:{
                                ...enemy.hp,
                                currentHp:enemy.hp.currentHp - damage
                            }
                        }
                    }
                    } else return {...state}
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

export default battleReducer;