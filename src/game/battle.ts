import { Dispatch } from 'redux';

import { endBattle } from '../redux/actions/battleActionCreators';
import { modifyChamp} from '../redux/actions/champActionCreators';
import { addGold} from '../redux/actions/itemActionCreators';

import {addExpAndcheckLvlUp} from './lvlUp'

enum ChampClass {
    Warrior = 0,
    Mage = 1,
    Hunter = 2,
    notPicked = -1,
}


export const basicAttack = (attacker:Champion | Enemy, defender:Champion | Enemy):AttackResult => {
    const result:AttackResult = {
        damage:0,
        statusText:``,
    };

    const randomAttNum = Math.round(Math.random() * 110);
    const randomDefNum = Math.round(Math.random() * 100);

    if (randomAttNum < defender.blockChance / 2) {
        result.statusText = 'Attack blocked!'
        return result
    }

    if (randomAttNum + attacker.accuracy < randomDefNum + defender.dodgeChance / 2) {
        result.statusText = 'Attack missed!'
        return result
    }

    const isCrit = Math.round(Math.random() * 100) < attacker.critChance

    if (attacker.level > defender.level ? true : false) {
        result.damage = randomAttNum * (isCrit ? 2 : 1) - (defender.armor / 2)
    } else {
        result.damage = randomAttNum * (isCrit ? 2 : 1)  - defender.armor
    }

    result.damage = Math.floor(result.damage)

    if (result.damage <= 0) {
        result.statusText = 'Attack blocked!'
        return result;
    }

    if(isCrit) { result.statusText = `Critical strike! Dealt ${result.damage} damage!`}
     else {result.statusText = `Attack dealt ${result.damage} damage!`}

    
    return result;

}


///end battle
export const deleteBattle = (
    champ: Champion,
    dispatch: Dispatch<any>,
    toggleBattle: React.Dispatch<React.SetStateAction<boolean>>,
    enemy:Enemy,
    goldEarned?:number): void => {
    const champToReplace = {...champ}
    //Warior gets his rage reset after every fight
    if (champToReplace.champClass === ChampClass.Warrior){
        champToReplace.res.current = 0;
    }
    //Hunter recovers 100% energy after every fight
    if (champToReplace.champClass === ChampClass.Hunter) {
        champToReplace.res.current = champToReplace.res.full;
    }

    if (goldEarned) dispatch( addGold( goldEarned))
    dispatch( modifyChamp( addExpAndcheckLvlUp (champToReplace,enemy.expForWin)));
    toggleBattle(false);
    dispatch(endBattle());

};