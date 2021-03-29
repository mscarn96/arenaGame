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

const warriorSkillsToLearn = [warriorMoves.Shockwave, warriorMoves.ThreeHitCombo,warriorMoves.Disarm,warriorMoves.Execution]
const mageSkillsToLearn = [mageMoves.MagicBarrier, mageMoves.IceBlast, mageMoves.Exhaust, mageMoves.LightningBolt]
const hunterSkillsToLearn = [hunterMoves.Preparation, hunterMoves.ArrowRain, hunterMoves.SmokeGranade, hunterMoves.Headshot]

const addWarriorSkill = (champ:Champion):void => {
    switch(champ.level){
        case 3:
            champ.skillset.push(warriorSkillsToLearn[0]);
            break;
        case 5:
            champ.skillset.push(warriorSkillsToLearn[1]);
            break
        case 7:
            champ.skillset.push(warriorSkillsToLearn[2]);
            break;
        case 9:
            champ.skillset.push(warriorSkillsToLearn[3])
            break
        default:
            break;
    }
}

const addMageSkill = (champ:Champion):void => {
    switch(champ.level){
        case 3:
            champ.skillset.push(mageSkillsToLearn[0]);
            break;
        case 5:
            champ.skillset.push(mageSkillsToLearn[1]);
            break
        case 7:
            champ.skillset.push(mageSkillsToLearn[2]);
            break;
        case 9:
            champ.skillset.push(mageSkillsToLearn[3])
            break
        default:
            break;
    }
}

const addHunterSkill = (champ:Champion):void => {
    switch(champ.level){
        case 3:
            champ.skillset.push(hunterSkillsToLearn[0]);
            break;
        case 5:
            champ.skillset.push(hunterSkillsToLearn[1]);
            break
        case 7:
            champ.skillset.push(hunterSkillsToLearn[2]);
            break;
        case 9:
            champ.skillset.push(hunterSkillsToLearn[3])
            break
        default:
            break;
    }
}



const lvlUpChamp = (champ:Champion,expToLvlUp:number):Champion => {
    const champToReplace = {...champ}
    champToReplace.level = champ.level + 1;
    switch(champToReplace.champClass){
        case ChampClass.Warrior:
            addWarriorSkill(champToReplace);
            champToReplace.hp.currentHp = champ.hp.currentHp + 50;
            champToReplace.hp.fullHp = champ.hp.fullHp + 50;
            champToReplace.exp = champ.exp - expToLvlUp;
            champToReplace.accuracy = champ.accuracy + 2;
            champToReplace.critChance = champ.critChance + 1;
            champToReplace.attackDamage = champ.attackDamage + 5;
            champToReplace.blockChance = champ.blockChance + 2;
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
            champToReplace.accuracy = champ.accuracy + 3;
            champToReplace.critChance = champ.critChance + 3;
            champToReplace.attackDamage = champ.attackDamage + 3;
            champToReplace.blockChance = champ.blockChance + 1;
            champToReplace.armor = champ.armor + 3;
            champToReplace.magicDef = champ.magicDef + 2;
            champToReplace.dodgeChance = champ.dodgeChance + 2;
            return champToReplace
        case ChampClass.Mage:
            addMageSkill(champToReplace);
            champToReplace.hp.currentHp = champ.hp.currentHp + 30;
            champToReplace.hp.fullHp = champ.hp.fullHp + 30;
            champToReplace.exp = champ.exp - expToLvlUp;
            champToReplace.magicPower = champ.magicPower + 15;
            champToReplace.res.full = champ.res.full + 25;
            champToReplace.accuracy = champ.accuracy + 1;
            champToReplace.critChance = champ.critChance + 2;
            champToReplace.attackDamage = champ.attackDamage + 5;
            champToReplace.blockChance = champ.blockChance + 1;
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
    if (willLvlUp(champ,expFromWin)) return lvlUpChamp(champToReplace,expToLvlUp[champ.level - 1])
    return champToReplace
    
}

export const getGoldFromWin = (enemyLevel:number):number => {
    return enemyLevel * Math.round(Math.random() * 25)
}

export const isLearingSkill = (champ:Champion):boolean => {
    const learningLvls = [3,5,7,9];
    if (learningLvls.includes(champ.level + 1)) return true
    return false
}

export const getNextLearnedSkillName = (champ:Champion):string => {
    const isHunter = champ.champClass === ChampClass.Hunter
    const isWarrior = champ.champClass === ChampClass.Warrior
    const isMage = champ.champClass === ChampClass.Mage

    let skillArr = (isHunter && hunterSkillsToLearn) || (isWarrior && warriorSkillsToLearn) || (isMage && mageSkillsToLearn) || [];

    if (champ.level + 1 === 3) return skillArr[0].name
    if (champ.level + 1 === 5) return skillArr[1].name
    if (champ.level + 1 === 7) return skillArr[2].name
    if (champ.level + 1 === 9) return skillArr[3].name

    return ``

}