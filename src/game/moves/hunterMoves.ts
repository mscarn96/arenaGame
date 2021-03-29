const headShotEffect = (hunter:Champion, defender:Enemy):AttackResult => {
    const randomAttNum = Math.round(Math.random() * 25);
    let damage = (hunter.attackDamage * randomAttNum) / 5 - defender.armor 
    damage = Math.floor(damage)
    const isDamagePositive = damage > 1;
    const statusText = `${hunter.name} used Headshot${isDamagePositive ? `! It dealt ${damage} damage!` : `, but it missed!`}`
    if (isDamagePositive) {return {
        statusText,
        damage
    }} else return {
        statusText,
        damage:0
    }
}

const arrowRainEffect = (hunter:Champion, defender:Enemy):AttackResult => {
    const randomAttNum = Math.round(Math.random() * 170);
    const randomDefNum = Math.round(Math.random() * 100);
    let damage = (hunter.attackDamage * randomAttNum) / 20 - (defender.armor * randomDefNum) / 10;
    damage = Math.floor(damage)
    const isDamagePositive = damage > 1;
    const statusText = `${hunter.name} used Arrow Rain${isDamagePositive ? `! It dealt ${damage} damage!` : `, but it missed!`}`
    if (isDamagePositive) {return {
        statusText,
        damage
    }} else return {
        statusText,
        damage:0
    }
}




const quickAttackEffect = (hunter:Champion, defender:Enemy):AttackResult => {
    const randomAttNum = Math.round(Math.random() * 150);
    const randomDefNum = Math.round(Math.random() * 100);
    let damage = (hunter.attackDamage * randomAttNum) / 40 - (defender.armor * randomDefNum) / 10;
    damage = Math.floor(damage)
    const isDamagePositive = damage > 1;
    const statusText = `${hunter.name} used Quick Attack${isDamagePositive ? `! It dealt ${damage} damage!` : `, but it missed!`}`
    if (isDamagePositive) {return {
        statusText,
        damage
    }} else return {
        statusText,
        damage:0
    }
}

const smokeGranadeEffect = (hunter:Champion, defender:Enemy):TurnResult => {
    const randomAttNum = Math.round(Math.random() * 150);
    const randomDefNum = Math.round(Math.random() * 100);
    const {accuracy} = defender;
    const effectNumber = randomAttNum - randomDefNum
    if (effectNumber > 0) {
        if (effectNumber > accuracy)
         {return {
            statusText:`${hunter.name} used Smoke Granade! ${defender.name}'s Accuracy is now 5!`,
            effectNumber:accuracy - 5,
         }} 
         else return {
            statusText:`${hunter.name} used Smoke Granade! ${defender.name}'s Accuracy is now ${accuracy - effectNumber}!`,
            effectNumber,
         }
    } else return {statusText:`${hunter.name} tried to use Smoke Granade but it failed!`,
    effectNumber:0}
}


const preparationEffect = (hunter:Champion, defender:Enemy):TurnResult => {
    const randomAttNum = Math.round(Math.random() * 150);
    const randomDefNum = Math.round(Math.random() * 100);
    const {armor} = defender;
    const effectNumber = randomAttNum - randomDefNum
    if (effectNumber > 0) {
        if (effectNumber > armor)
         {return {
            statusText:`${hunter.name} used Preparation! ${defender.name}'s Armor is now 0!`,
            effectNumber:armor,
         }} 
         else return {
            statusText:`${hunter.name} used Preparation! ${defender.name}'s Armor is now ${armor - effectNumber}!`,
            effectNumber,
         }
    } else return {statusText:`${hunter.name} tried to use Preparation but it failed!`,
    effectNumber:0}
}


export const Headshot:AttackSkill = {
    id:311,
    type:`DAMAGE`,
    name:`Headshot`,
    effect:headShotEffect,
    cost:40,
}


export const ArrowRain:AttackSkill = {
    id:312,
    type:`DAMAGE`,
    name:`Arrow Rain`,
    effect:arrowRainEffect,
    cost:30,
}


export const QuickAttack:AttackSkill = {
    id:313,
    type:`DAMAGE`,
    name:`Quick Attack`,
    effect:quickAttackEffect,
    cost:20,
}

export const SmokeGranade:EffectSkill = {
    id:314,
    type:`EFFECT`,
    name:`Smoke Granade`,
    stat:`accuracy`,
    effect:smokeGranadeEffect,
    cost:30
}

export const Preparation:EffectSkill = {
    id:114,
    type:`EFFECT`,
    name:`Preparation`,
    stat:`accuracy`,
    effect:preparationEffect,
    cost:30
}


