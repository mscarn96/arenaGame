import * as warriorMoves from './moves/warriorMoves'
import * as mageMoves from './moves/mageMoves'
import * as hunterMoves from './moves/hunterMoves'

enum ChampClass {
    Warrior = 0,
    Mage = 1,
    Hunter = 2,
    notPicked = -1,
}



export const expToLvlUp = [100,250,500,1000,2000,4000,8000,16000,32000]

const addWarriorSkill = (champ:Champion):void => {
    switch(champ.level){
        case 3:
            champ.skillset.push(warriorMoves.Shockwave);
            break;
        case 5:
            champ.skillset.push(warriorMoves.ThreeHitCombo);
            break
        case 7:
            champ.skillset.push(warriorMoves.Disarm);
            break;
        case 9:
            champ.skillset.push(warriorMoves.Execution)
            break
        default:
            break;
    }
}

const addMageSkill = (champ:Champion):void => {
    switch(champ.level){
        case 3:
            champ.skillset.push(mageMoves.MagicBarrier);
            break;
        case 5:
            champ.skillset.push(mageMoves.IceBlast);
            break
        case 7:
            champ.skillset.push(mageMoves.Exhaust);
            break;
        case 9:
            champ.skillset.push(mageMoves.LightningBolt)
            break
        default:
            break;
    }
}

const addHunterSkill = (champ:Champion):void => {
    switch(champ.level){
        case 3:
            champ.skillset.push(hunterMoves.Preparation);
            break;
        case 5:
            champ.skillset.push(hunterMoves.ArrowRain);
            break
        case 7:
            champ.skillset.push(hunterMoves.SmokeGranade);
            break;
        case 9:
            champ.skillset.push(hunterMoves.Headshot)
            break
        default:
            break;
    }
}



const lvlUp = (champ:Champion,expToLvlUp:number):Champion => {
    const champToReplace = {...champ}
    champToReplace.level = champ.level + 1;
    switch(champToReplace.champClass){
        case ChampClass.Warrior:
            addWarriorSkill(champToReplace);
            champToReplace.hp.currentHp = champ.hp.currentHp + 50;
            champToReplace.hp.fullHp = champ.hp.fullHp + 50;
            champToReplace.exp = champ.exp - expToLvlUp;
            champToReplace.accuracy = champ.accuracy + 2;
            champToReplace.critChance = champ.critChance + 2;
            champToReplace.attackDamage = champ.attackDamage + 5;
            champToReplace.blockChance = champ.blockChance + 3;
            champToReplace.armor = champ.armor + 5;
            champToReplace.magicDef = champ.magicDef + 3;
            champToReplace.dodgeChance = champ.dodgeChance + 1;
            return champToReplace
        case ChampClass.Hunter:
            addHunterSkill(champToReplace);
            champToReplace.hp.currentHp = champ.hp.currentHp + 30;
            champToReplace.hp.fullHp = champ.hp.fullHp + 30;
            champToReplace.exp = champ.exp - expToLvlUp;
            champToReplace.magicPower = champ.magicPower + 5;
            champToReplace.accuracy = champ.accuracy + 5;
            champToReplace.critChance = champ.critChance + 3;
            champToReplace.attackDamage = champ.attackDamage + 3;
            champToReplace.blockChance = champ.blockChance + 1;
            champToReplace.armor = champ.armor + 3;
            champToReplace.magicDef = champ.magicDef + 2;
            champToReplace.dodgeChance = champ.dodgeChance + 4;
            return champToReplace
        case ChampClass.Mage:
            addMageSkill(champToReplace);
            champToReplace.hp.currentHp = champ.hp.currentHp + 30;
            champToReplace.hp.fullHp = champ.hp.fullHp + 50;
            champToReplace.exp = champ.exp - expToLvlUp;
            champToReplace.magicPower = champ.magicPower + 15;
            champToReplace.res.full = champ.res.full + 25;
            champToReplace.accuracy = champ.accuracy + 2;
            champToReplace.critChance = champ.critChance + 2;
            champToReplace.attackDamage = champ.attackDamage + 5;
            champToReplace.blockChance = champ.blockChance + 3;
            champToReplace.armor = champ.armor + 5;
            champToReplace.magicDef = champ.magicDef + 3;
            champToReplace.dodgeChance = champ.dodgeChance + 1;
            return champToReplace
        default:
            return champToReplace;
    }
}

//checks if champion will lvl up after win
export const willLvlUp = (champ:Champion,expFromWin:number):boolean => {
    if (champ.exp + expFromWin > expToLvlUp[champ.level - 1]) return true
    return false
}

export const addExpAndcheckLvlUp = (champ:Champion,expFromWin:number):Champion => {
    let champToReplace = {...champ};
    champToReplace.exp = champ.exp + expFromWin
    if (willLvlUp(champ,expFromWin)) return lvlUp(champToReplace,expToLvlUp[champ.level - 1])
    return champToReplace
    
}

export const getGoldFromWin = (enemyLevel:number):number => {
    return enemyLevel * Math.round(Math.random() * 11)
}