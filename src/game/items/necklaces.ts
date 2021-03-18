import { v4 as uuidv4 } from 'uuid';
import getIcons from '../../components/ui/getIcons';

const icons = getIcons(require.context( '../../images/items/necklaceImages', true, /\.svg$/ ))

export const FeatherNecklace = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Feather Necklace',
        type:'neck',
        cost:500,
        value:{
            accuracy:3,
            armor:5,
            dodgeChance:2,
            critChance:3
        },
        description:'A light piece of bird is supposed to protect the person wearing this necklace. Accuracy +3, Armor +5, Dodge Chance +2, Critical Chance +3',
        isEquipped:false,
        imgPath:icons[2],
    }}

export const EmeraldNecklace = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Emerald Necklace',
        type:'neck',
        cost:500,
        value:{
            attackDamage:7,
            magicPower:16,
            critChance:3
        },
        description:'The string is thing but the precious mineral is well suited. Attack Damage +7, Magic Power +16, Critical Chance +3',
        isEquipped:false,
        imgPath:icons[1],
    }}


export const DoubleNecklace = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Double Necklace',
        type:'neck',
        cost:1000,
        value:{
            attackDamage:8,
            magicPower:20,
            armor:6,
            dodgeChance:4,
            accuracy:3,
        },
        description:'Beautiful pears attached to a precious lace. Attack Damage +8, Magic Power +20, Armor +6, Dodge Chance +4, Accuracy +3',
        isEquipped:false,
        imgPath:icons[0],
    }}

export const IntricateNecklace = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Intricate Necklace',
        type:'neck',
        cost:2500,
        value:{
            magicPower:60,
            armor:10,
        },
        description:'This artifact has an hexagonal gem in its pivot point. Magic Power +60, Armor +10',
        isEquipped:false,
        imgPath:icons[3],
    }}


export const PrimitiveNecklace = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Primitive Necklace',
        type:'neck',
        cost:25000,
        value:{
            attackDamage:25,
            armor:15,
            blockChance:5,
        },
        description:'A shaman decoration to perform rituals around the fire and save the tribe. Attack Damage +25, Armor +15, Block Chance +5',
        isEquipped:false,
        imgPath:icons[5],
    }}


export const tribalPendant = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Tribal Pendant',
        type:'neck',
        cost:2500,
        value:{
            attackDamage:20,
            accuracy:6,
            critChance:10,
        },
        description:'A doomed necklace made from animal horns and teeth. Attack Damage +15,Crit Chance +10, Accuracy +6',
        isEquipped:false,
        imgPath:icons[6],
    }}


export const TheNecklace = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'The Necklace',
        type:'neck',
        cost:10000,
        value:{
            accuracy:5,
            armor:15,
            attackDamage:30,
            blockChance:5,
            critChance:5,
            dodgeChance:5,
            magicPower:70
        },
        description:'A shuriken resting on your chest. Accuracy +, Armor 15, Attack Damage +30, Block Chance +5, Critical Chance +5, Dodge Chance +5, Magic Power +70',
        isEquipped:false,
        imgPath:icons[4],
    }}
