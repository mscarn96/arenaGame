import {basicAttack} from '../battle'

export const warriorGainRes = (warrior:Champion,number:number):void => {
        if (warrior.res.current + number <= 100) {
            warrior.res.current += number
        } else {warrior.res.current = 100}
}


export const warriorBasicAttack = (warrior:Champion, defender:Character | Champion):Result => {
    const result = basicAttack(warrior,defender);
    if (result.damage > 0) {
        if (result.statusCode === 2) {
            warriorGainRes(warrior,20)
        } else warriorGainRes(warrior,10)
    }
    return result;
}

export const warriorSimpleCombo = (warrior:Champion, defender:Character | Champion):Result => {
    const result:Result = {
        damage : 0,
        statusText : '3-Hit Combo!',
        statusCode : 333

    }
    for (let i = 0;i<3;i++){
        const damage = warriorBasicAttack(warrior,defender).damage
        result.damage += damage
    }
    warrior.res.current -= 40;
    return result;
}