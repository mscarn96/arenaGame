const fireBallEffect = (mage:Champion, defender:Enemy):AttackResult => {
    const randomAttNum = Math.round(Math.random() * 120);
    const randomDefNum = Math.round(Math.random() * 100);
    let damage = (mage.magicPower * randomAttNum) / 40 - (defender.magicDef * randomDefNum) / 5;
    damage = Math.floor(damage)
    const isDamagePositive = damage > 1;
    const statusText = `${mage.name} used Fireball! It dealt ${isDamagePositive ? damage : 1} damage!`
    if (isDamagePositive) {return {
        statusText,
        damage
    }} else return {
        statusText,
        damage:1
    }
}

const iceBlastEffect = (mage:Champion,defender:Enemy):AttackResult => {
    const randomAttNum = Math.round(Math.random() * 130);
    const randomDefNum = Math.round(Math.random() * 100);
    let damage = (mage.magicPower * randomAttNum) / 25 - (defender.magicDef * randomDefNum) / 50;
    damage = Math.floor(damage)
    const isDamagePositive = damage > 1;
    const statusText = `${mage.name} used Ice Blast! It dealt ${isDamagePositive ? damage : 1} damage!`
    if (isDamagePositive) {return {
        statusText,
        damage
    }} else return {
        statusText,
        damage:1
    }
}

const exhaustEffect = (mage:Champion,defender:Enemy):TurnResult => {
    const randomAttNum = Math.round(Math.random() * 100);
    const randomDefNum = Math.round(Math.random() * 100);
    const {magicDef} = defender;
    const effectNumber = randomAttNum - randomDefNum
    if (effectNumber > 0) {
        if (effectNumber > magicDef)
         {return {
            statusText:`${mage.name} used Exhaust! ${defender.name}'s Magic Defence is now 0!`,
            effectNumber:magicDef,
         }} 
         else return {
            statusText:`${mage.name} used Exhaust! ${defender.name}'s Magic Defence is now ${magicDef - effectNumber}!`,
            effectNumber,
         }
    } else return {statusText:`${mage.name} tried to use Exhaust but it failed!`,
    effectNumber:0}
}

export const Fireball:AttackSkill = {
    id:111,
    type:`DAMAGE`,
    name:`Fireball`,
    effect:fireBallEffect,
    cost:40,
}

export const IceBlast:AttackSkill = {
    id:112,
    type:`DAMAGE`,
    name:`Ice Blast`,
    effect:iceBlastEffect,
    cost:70,
}

export const Exhaust:EffectSkill = {
    id:113,
    type:`EFFECT`,
    name:`Exhaust`,
    stat:`magicDef`,
    effect:exhaustEffect,
    cost:50
}