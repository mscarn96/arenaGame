export const basicAttack = (attacker:Champion | Enemy, defender:Champion | Enemy):AttackResult => {
    const result:AttackResult = {
        damage:0,
        statusText:``,
        statusCode:-1
    };

    const randomAttNum = Math.round(Math.random() * 100);
    const randomDefNum = Math.round(Math.random() * 100);

    if (randomDefNum < defender.blockChance) {
        result.statusText = 'Attack blocked!'
        result.statusCode = 1
        return result
    }

    if (randomAttNum + attacker.accuracy < randomDefNum + defender.dodgeChance) {
        result.statusText = 'Attack missed!'
        result.statusCode = 0
        return result
    }

    let critModifier:number = 1;

    if (randomAttNum < attacker.critChance) {
        result.statusCode = 2
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
        result.statusCode = 1
        return result
    }
    

    
    return result;

}

