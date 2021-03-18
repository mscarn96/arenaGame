import { v4 as uuidv4 } from 'uuid';
import getIcons from '../../components/ui/getIcons';

const icons = getIcons(require.context( '../../images/items/bootsImages', true, /\.svg$/ ))

export const Sandals = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Sandals',
        type:'feet',
        cost:100,
        value:{
            armor:4,
        },
        description:'A leather shoe with strapes around the leg. Armor +4',
        isEquipped:false,
        imgPath:icons[3],
        
    }}
//https://game-icons.net/1x1/delapouite/sandal.html

export const TabiBoots = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Tabi Boots',
        type:'feet',
        cost:250,
        value:{
            armor:5,
            dodgeChance:3,
        },
        description:'Light shoes with no hard sole producing loud noises. This way discretion is optimal. Armor +5,Dodge Chance +3',
        isEquipped:false,
        imgPath:icons[5],
    }}
//https://game-icons.net/1x1/darkzaitzev/tabi-boot.html

export const MetalBoots = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Tabi Boots',
        type:'feet',
        cost:350,
        value:{
            armor:7,
        },
        description:'The toes are well protected under this plate. Armor +7',
        isEquipped:false,
        imgPath:icons[2],
    }}
//https://game-icons.net/1x1/delapouite/metal-boot.html

export const FurBoots = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Fur Boots',
        type:'feet',
        cost:500,
        value:{
            armor:9,
            dodgeChance:2,
        },
        description:'Warm and cosy boot made of animal fur to walk in the snow and keep the ankles straight. Armor +9, Dodge Chance +2',
        isEquipped:false,
        imgPath:icons[0],
    }}
//https://game-icons.net/1x1/delapouite/fur-boot.html

export const SteeltoeBoots = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Steeltoe Boots',
        type:'feet',
        cost:500,
        value:{
            armor:12,
        },
        description:'These special shoes preserve the feet of labourers from anything heavy that might fall by accident. Armor +12',
        isEquipped:false,
        imgPath:icons[4],
    }}

//https://game-icons.net/1x1/lorc/steeltoe-boots.html

export const LegArmor = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Leg Armor',
        type:'feet',
        cost:1000,
        value:{
            armor:22,
        },
        description:'Metal protections from knee to ankle. Not so easy to cross ford with such heavy boots. Armor +22',
        isEquipped:false,
        imgPath:icons[1],
    }}
//https://game-icons.net/1x1/delapouite/leg-armor.html