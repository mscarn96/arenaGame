import { v4 as uuidv4 } from 'uuid';
import getIcons from '../ui/getIcons';
const icons = getIcons(require.context( '../../images/items/weaponImages', true, /\.svg$/ ))

export const SheperdsCrook = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Sheperds Crook',
        type:'rightHand',
        cost:50,
        value:{
            attackDamage:4,
            magicPower:12
        },
        description:'A wooden stick used to show the way to sheep. Attack Damage +5, Magic Power +15',
        isEquipped:false,
        imgPath:icons[9],
    }}


export const WizardStaff = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Wizard Staff',
        type:'rightHand',
        cost:300,
        value:{
            attackDamage:8,
            magicPower:30
        },
        description:'A stick made of wood to cast magic. Attack Damage +8, Magic Power +30',
        isEquipped:false,
        imgPath:icons[11],
    }}

export const FairyWand = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Fairy Wand',
        type:'rightHand',
        cost:800,
        value:{
            attackDamage:15,
            magicPower:60
        },
        description:'A woman is a witch if she weights the same as a duck. No need to carry any magical rod to prove it to merciless folks. Attack Damage +15, Magic Power +60',
        isEquipped:false,
        imgPath:icons[4],
    }}


export const CrystalWand = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Crystal Wand',
        type:'rightHand',
        cost:1500,
        value:{
            attackDamage:30,
            magicPower:100
        },
        description:'A scepter with a mineral on its end. Attack Damage +30, Magic Power +100',
        isEquipped:false,
        imgPath:icons[3],
    }}



export const PocketBow = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Pocket Bow',
        type:'rightHand',
        cost:50,
        value:{
            attackDamage:6,
            accuracy:2,
        },
        description:'Ready to fire by a sneaky archer at any moment of the day. Attack Damage +7, Accuracy +3',
        isEquipped:false,
        imgPath:icons[7],
    }}

export const Crossbow = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Crossbow',
        type:'rightHand',
        cost:300,
        value:{
            attackDamage:10,
            accuracy:5,
        },
        description:'The Middle-Ages version of automatic riffles is much more powerful than a simple bow. Attack Damage +10, Accuracy +5',
        isEquipped:false,
        imgPath:icons[2],
    }}


export const Shuriken = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Shuriken',
        type:'rightHand',
        cost:800,
        value:{
            attackDamage:20,
            accuracy:8,
            critChance:4,
        },
        description:'A Japanese weapon made of steel and thrown on moving targets. Attack Damage +20, Accuracy +8, Critical Chance +4',
        isEquipped:false,
        imgPath:icons[10],
    }}

export const LightningBow = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Lightning Bow',
        type:'rightHand',
        cost:1500,
        value:{
            attackDamage:36,
            accuracy:12,
            critChance:8,
        },
        description:'Used by Zeus to show its wrath over humans.. Attack Damage +36, Accuracy +12, Critical Chance +8',
        isEquipped:false,
        imgPath:icons[6],
    }}

export const Gladius = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Gladius',
        type:'rightHand',
        cost:50,
        value:{
            attackDamage:10,
            blockChance:2,
        },
        description:'Small sword used by foot soldiers of the Roman Empire. Attack Damage +10, Block Chance +2',
        isEquipped:false,
        imgPath:icons[5],
    }}

export const BattleAxe = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Battle Axe',
        type:'rightHand',
        cost:300,
        value:{
            attackDamage:18,
            critChance:3
        },
        description:'The right blade to cut on the way down but also on the way up. Attack Damage +18, Critical Chance +3',
        isEquipped:false,
        imgPath:icons[0],
    }}

export const CrocSword = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Croc Sword',
        type:'rightHand',
        cost:800,
        value:{
            attackDamage:25,
            critChance:8
        },
        description:'A sword with sharp teeth to inflict deadly and painful injuries. Attack Damage +25, Critical Chance +8',
        isEquipped:false,
        imgPath:icons[1],
    }}

export const RelicBlade = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Relic Blade',
        type:'rightHand',
        cost:1500,
        value:{
            attackDamage:45,
            critChance:10,
            blockChance:5
        },
        description:'A sword with sharp teeth to inflict deadly and painful injuries. Attack Damage +25, Critical Chance +8, Block Chance +5',
        isEquipped:false,
        imgPath:icons[8],
    }}
