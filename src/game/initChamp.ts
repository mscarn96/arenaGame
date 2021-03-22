import * as mageMoves from './moves/mageMoves'
import * as warriorMoves from './moves/warriorMoves'

import hunterImg from '../images/champs/HunterImg.jpg'
import mageImg from '../images/champs/MageImg.jpg'
import warriorImg from '../images/champs/WarriorImg.jpg'

const initChamp = (name:string, champClass:ChampClass):Champion => {
    switch (champClass) {
        case 0:
            return {
                id:0,
                name,
                champClass,
                level: 1,
                hp:{
                    currentHp:250,
                    fullHp:250
                },
                res:{
                    name:'rage',
                    current:0,
                    full:100
                },
                exp:0,
                itemSlots:{
                    head:null,
                    body:null,
                    feet:null,
                    neck:null,
                    rightHand:null,
                    leftHand:null,
                },
                accuracy:60,
                critChance:10,
                attackDamage:60,
                magicPower:0,
                blockChance:15,
                armor:25,
                magicDef:18,
                dodgeChance:5,
                expForWin:0,
                image:warriorImg,
                skillset:[warriorMoves.Execution,warriorMoves.ThreeHitCombo,warriorMoves.Disarm,warriorMoves.Shockwave,warriorMoves.WeaponThrow]}
        case 1:
            return {
                id:0,
                name,
                champClass,
                level: 1,
                hp:{
                    currentHp:180,
                    fullHp:180
                },
                res:{
                    name:'mana',
                    current:80,
                    full:80
                },
                exp:0,
                itemSlots:{
                    head:null,
                    body:null,
                    feet:null,
                    neck:null,
                    rightHand:null,
                    leftHand:null,
                },
                accuracy:70,
                critChance:0,
                attackDamage:30,
                magicPower:40,
                blockChance:5,
                armor:17,
                magicDef:20,
                dodgeChance:8,
                expForWin:0,
                image:mageImg,
                skillset:[mageMoves.Fireball,mageMoves.Exhaust,mageMoves.IceBlast,mageMoves.LightningBolt,mageMoves.MagicBarrier]
            }
        case 2:
                return {
                    id:0,
                    name,
                    champClass,
                    level: 1,
                    hp:{
                        currentHp:200,
                        fullHp:200,
                    },
                    res:{
                        name:'focus',
                        current:100,
                        full:100,
                    },
                    exp:0,
                    itemSlots:{
                        head:null,
                        body:null,
                        feet:null,
                        neck:null,
                        rightHand:null,
                        leftHand:null,
                    },
                    accuracy:80,
                    critChance:20,
                    attackDamage:50,
                    magicPower:5,
                    blockChance:0,
                    armor:20,
                    magicDef:15,
                    dodgeChance:20,
                    expForWin:0,
                    image:hunterImg,
                    imgCred:`Sicarius8`,
                    skillset:[]
                }    
        default:
            throw new Error(`champion class of id${champClass} doesn't exist!`);
    }   
}

export const ghost:Champion = {
    id:0,
    name:'ghost',
    champClass:-1,
    level: 0,
    hp:{
        currentHp:1,
        fullHp:1,
    },
    res:{
        name:'focus',
        current:0,
        full:1,
    },
    exp:0,
    itemSlots:{
        head:null,
        body:null,
        feet:null,
        neck:null,
        rightHand:null,
        leftHand:null,
    },
    accuracy:1,
    critChance:1,
    attackDamage:1,
    magicPower:1,
    blockChance:0,
    armor:1,
    magicDef:1,
    dodgeChance:0,
    expForWin:0,
    image:mageImg,
    skillset:[]

}

export default initChamp;