export const fireBall = (mage:Champion, defender:Enemy):number => {
    const randomAttNum = Math.round(Math.random() * 100);
    const randomDefNum = Math.round(Math.random() * 100);
    let result = (mage.magicPower * randomAttNum) / 50 - (defender.magicDef * randomDefNum) / 50
    if (result > 0){return result} else {return 1};
}

export const iceBlast = (mage:Champion,defender:Enemy):number => {
    const randomAttNum = Math.round(Math.random() * 100);
    const randomDefNum = Math.round(Math.random() * 100);
    let result = (mage.magicPower * randomAttNum) / 35 - (defender.magicDef * randomDefNum) / 50
    if (result > 0){return result} else {return 1};
}

export const exhaust = (defender:Enemy):number => {
    const randomAttNum = Math.round(Math.random() * 100);
    const randomDefNum = Math.round(Math.random() * 100);
    const {magicDef} = defender;
    let result = magicDef - (randomAttNum - randomDefNum)
    if (result < magicDef) {
        if (result < 0) {return 0} else return result
    } else return magicDef
}