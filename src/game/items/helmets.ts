import { v4 as uuidv4 } from 'uuid';
import getIcons from '../ui/getIcons';
const icons = getIcons(require.context( '../../images/items/helmetImages', true, /\.svg$/ ))

export const BrodieHelmet = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Brodie Helmet',
        type:'head',
        cost:120,
        value:{
            armor:5,
            magicDef:3
        },
        description:'Basic head item. Armor +5, Magic Defence +3',
        isEquipped:false,
        imgPath:icons[2],
    }}


export const Bandana = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Bandana',
        type:'head',
        cost:120,
        value:{
            armor:3,
            dodgeChance:3
            },
        description:'A cloth put on the top of the head. Armor +3, Dodge Chance +3',
        isEquipped:false,
        imgPath:icons[0],
        }}

    
export const Cowl = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Cowl',
        type:'head',
        cost:150,
        value:{
            armor:5,
            dodgeChance:4,
        },
        description:'A cowl to hide a head under. Armor +5, Dodge Chance +4',
        isEquipped:false,
        imgPath:icons[4],
    }}

export const BrutalHelmet = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Brutal Helmet',
        type:'head',
        cost:350,
        value:{
            armor:14,
            blockChance:3,
        },
        description:'Long horns on each side of this helmet. Armor +14, Block Chance +4',
        isEquipped:false,
        imgPath:icons[3],
    }}

export const DwarfHelmet = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Dwarf Helmet',
        type:'head',
        cost:300,
        value:{
            armor:10,
            blockChance:5,
        },
        description:'Dwarves deserve thick helmets to protect them from falling stones while mining. Armor +10, Block Chance +5',
        isEquipped:false,
        imgPath:icons[5],
    }}


export const BlackKnightHelmet = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Black Knight Helmet',
        type:'head',
        cost:500,
        value:{
            armor:14,
            blockChance:4,
        },
        description:'A solid helmet to protect from flesh wounds and scratches.. Armor +18, Block Chance +4',
        isEquipped:false,
        imgPath:icons[1],
    }}

export const ElfHelmet = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Elf Helmet',
        type:'head',
        cost:400,
        value:{
            armor:8,
            magicPower:20,
        },
        description:'A long helm with wing-shaped protections on the side and a narrow star for the noise. Armor +8, Magic Power +20',
        isEquipped:false,
        imgPath:icons[6],
    }}

export const SamuraiHelmet = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Samurai Helmet',
        type:'head',
        cost:1000,
        value:{
            armor:24,
            critChance:10,
        },
        description:'This medieval Japanese protection was the inspiration for Darth Vader helmet. Armor +24, Critical Chance +10',
        isEquipped:false,
        imgPath:icons[8],
    }}



export const HeavyHelmet = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Heavy Helmet',
        type:'head',
        cost:1000,
        value:{
            armor:30,
            blockChance:10,
        },
        description:'This helmet has horns, like Vikings. Armor +30, Block Chance +10',
        isEquipped:false,
        imgPath:icons[7],
    }}

export const WarlockHood = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Overlord Helmet',
        type:'head',
        cost:1000,
        value:{
            armor:22,
            magicPower:50,
        },
        description:'Lots of mysteries in this nebulous face where aging seems controlled by dark magic. Armor +22, Magic Power +50',
        isEquipped:false,
        imgPath:icons[9],
    }}
