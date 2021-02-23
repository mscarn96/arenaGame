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

    const randomAttNum = Math.round(Math.random() * 100);
    const randomDefNum = Math.round(Math.random() * 100);

    if (randomDefNum < defender.blockChance) {
        result.statusText = 'Attack blocked!'
        return result
    }

    if (randomAttNum + attacker.accuracy < randomDefNum + defender.dodgeChance) {
        result.statusText = 'Attack missed!'
        return result
    }

    let critModifier:number = 1;

    if (randomAttNum < attacker.critChance) {
        critModifier = 2;
    }

    if (attacker.level > defender.level ? true : false) {
        result.damage = randomAttNum * critModifier - (defender.armor / 2)
    } else {
        result.damage = randomAttNum * critModifier - defender.armor
    }

    result.damage = Math.floor(result.damage)

    if(critModifier === 2) { result.statusText = `Critical strike! Dealt ${result.damage} damage!`} else {
        result.statusText = `Attack dealt ${result.damage} damage!`
    }

    if (result.damage <= 0) {
        result.statusText = 'Attack blocked!'
        return result
    }
    

    
    return result;

}

export const expToLvlUp = [100,250,500,1000,2000,4000,8000,16000,32000]

const lvlUp = (champ:Champion,expToLvlUp:number):Champion => {
    const champToReplace = {...champ}
    champToReplace.level = champ.level + 1;
    switch(champToReplace.champClass){
        case ChampClass.Warrior:
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

export const addExpAndcheckLvlUp = (champ:Champion,expFromWin:number):Champion => {
    let champToReplace = {...champ};
    champToReplace.exp = champ.exp + expFromWin
    if (champToReplace.exp < expToLvlUp[champ.level - 1]) return champToReplace

    champToReplace = lvlUp(champToReplace,expToLvlUp[champ.level - 1])
    return champToReplace
    
}

export const getGoldFromWin = (enemyLevel:number):number => {
    return enemyLevel * Math.round(Math.random() * 11)
}