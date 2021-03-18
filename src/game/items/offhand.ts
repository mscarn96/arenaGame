import { v4 as uuidv4 } from 'uuid';
import getIcons from '../../components/ui/getIcons';

const icons = getIcons(require.context( '../../images/items/offhandImages', true, /\.svg$/ ))


export const Quiver = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Quiver',
        type:'leftHand',
        cost:1000,
        value:{
            accuracy:5,
            critChance:5
        },
        description:'A box carried by bowmen in their back containing a supply of arrows to practice archery. Accuracy +6, Critical Chance +3',
        isEquipped:false,
        imgPath:icons[4],
    }}

export const LuckyCoin = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Lucky Coin',
        type:'leftHand',
        cost:1000,
        value:{
            accuracy:5,
            dodgeChance:5
        },
        description:'Medieval cash, with no real money value nowadays but with high importance for museums. Accuracy +6, Critical Chance +3',
        isEquipped:false,
        imgPath:icons[0],
    }}


export const DeathNote = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Death Note',
        type:'leftHand',
        cost:1000,
        value:{
            magicPower:25,
            blockChance:10,
        },
        description:'A bad omen written on a paper. Magic Power +25, Block Chance +10',
        isEquipped:false,
        imgPath:icons[1],
    }}

export const EnlightmentBook = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Enlightment Book',
        type:'leftHand',
        cost:1000,
        value:{
            magicPower:25,
            dodgeChance:10,
        },
        description:'All the bright knowledge and secret formulas of this rich book are finally exposed to the fortunate reader. Magic Power +25, Dodge Chance +10',
        isEquipped:false,
        imgPath:icons[3],
    }}

export const TemplarShield = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Templar Shield',
        type:'leftHand',
        cost:1000,
        value:{
            blockChance:15,
            accuracy:8
        },
        description:'To protect knights going on a crusade. Block Chance +15, Accuracy +8',
        isEquipped:false,
        imgPath:icons[5],
    }}

export const DragonShield = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Dragon Shield',
        type:'leftHand',
        cost:1000,
        value:{
            blockChance:15,
            critChance:8
        },
        description:'Can this protection sustain the fire-breath of a dragon? Only a mighty adventurer may prove it. Block Chance +15, Critical Chance +8',
        isEquipped:false,
        imgPath:icons[2],
    }}
