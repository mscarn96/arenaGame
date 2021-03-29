const fireBallEffect = (mage:Champion, defender:Enemy):AttackResult => {
    const randomAttNum = Math.round(Math.random() * 190);
    const randomDefNum = Math.round(Math.random() * 100);
    let damage = (mage.magicPower * randomAttNum) / 50 - (defender.magicDef * randomDefNum) / 5;
    damage = Math.floor(damage)
    const isDamagePositive = damage > 1;
    const statusText = `${mage.name} used Fireball${isDamagePositive ? `! It dealt ${damage} damage!` : `, but it missed!`}`
    if (isDamagePositive) {return {
        statusText,
        damage
    }} else return {
        statusText,
        damage:0
    }
}

const iceBlastEffect = (mage:Champion,defender:Enemy):AttackResult => {
    const randomAttNum = Math.round(Math.random() * 200);
    const randomDefNum = Math.round(Math.random() * 100);
    let damage = (mage.magicPower * randomAttNum) / 30 - (defender.magicDef * randomDefNum) / 50;
    damage = Math.floor(damage)
    const isDamagePositive = damage > 1;
    const statusText = `${mage.name} used Ice Blast${isDamagePositive ? `! It dealt ${damage} damage!` : `, but it missed!`}`
    if (isDamagePositive) {return {
        statusText,
        damage
    }} else return {
        statusText,
        damage:0
    }
}

const exhaustEffect = (mage:Champion,defender:Enemy):TurnResult => {
    const randomAttNum = Math.round(Math.random() * 200);
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

const magicBarrierEffect = (mage:Champion,defender:Enemy):TurnResult => {
    const randomAttNum = Math.round(Math.random() * 200);
    const randomDefNum = Math.round(Math.random() * 100);
    const {attackDamage} = defender;
    const effectNumber = randomAttNum - randomDefNum
    if (effectNumber > 0) {
        if (effectNumber > attackDamage)
         {return {
            statusText:`${mage.name} used Magic Barrier! ${defender.name}'s Attack Damage is now ${Math.floor(attackDamage / 2)}!`,
            effectNumber:Math.floor(attackDamage / 2),
         }} 
         else return {
            statusText:`${mage.name} used Magic Barrier! ${defender.name}'s Attack Damage is now ${Math.floor(attackDamage - attackDamage / 3)}!`,
            effectNumber:Math.floor(attackDamage / 3),
         }
    } else return {statusText:`${mage.name} tried to use Magic Barrier but it failed!`,
    effectNumber:0}
}

const lightningBoltEffect = (mage:Champion,defender:Enemy):AttackResult => {
    const randomAttNum = Math.round(Math.random() * 230);
    const randomDefNum = Math.round(Math.random() * 100);
    let damage = (mage.magicPower * randomAttNum) / 25 - (defender.magicDef * randomDefNum) / 50;
    damage = Math.floor(damage)
    const isDamagePositive = damage > 1;
    const statusText = `${mage.name} used Lightning Bolt${isDamagePositive ? `! It dealt ${damage} damage!` : `, but it missed!`}`
    if (isDamagePositive) {return {
        statusText,
        damage
    }} else return {
        statusText,
        damage:0
    }
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

export const MagicBarrier:EffectSkill = {
    id:114,
    type:`EFFECT`,
    name:`Magic Barrier`,
    stat:`attackDamage`,
    effect:magicBarrierEffect,
    cost:60
}

export const LightningBolt:AttackSkill = {
    id:115,
    type:`DAMAGE`,
    name:`Lightning Bolt`,
    effect:lightningBoltEffect,
    cost:100,
}