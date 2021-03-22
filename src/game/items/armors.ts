import { v4 as uuidv4 } from 'uuid';
import getIcons from '../ui/getIcons';

const icons = getIcons(require.context( '../../images/items/armorImages', true, /\.svg$/ ))



export const MailShirt = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Mail Shirt',
        type:'body',
        cost:150,
        value:{
            armor:7,
        },
        description:'Small metal rings tied together to form a protective layer on top of the skin.. Armor +6',
        isEquipped:false,
        imgPath:icons[5],
    }}

export const LeatherArmor = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Leather Armor',
        type:'body',
        cost:250,
        value:{
            armor:10,
        },
        description:'A chest protection for all kind of warriors with a small utility belt. Armor +10',
        isEquipped:false,
        imgPath:icons[3],
    }}

export const Loincloth = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Loincloth',
        type:'body',
        cost:400,
        value:{
            armor:12,
            dodgeChance:3,
        },
        description:'Piece of leather attach to a belt and hanging between the legs to protect weak points. Armor +12, Dodge Chance +3',
        isEquipped:false,
        imgPath:icons[4],
    }}

export const CapeArmor = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Cape Armor',
        type:'body',
        cost:750,
        value:{
            armor:14,
            magicPower:35,
        },
        description:'This metal armor is a suitable for a mage, but does not allow to fly. Armor +14, Magic Power +35',
        isEquipped:false,
        imgPath:icons[1],
    }}


export const PirateCoat = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Pirate Coat',
        type:'body',
        cost:750,
        value:{
            armor:10,
            dodgeChance:5,
            critChance:5,
        },
        description:'A long coat with ample sleeves and lots of attach on the front. It protects from sea surf. Armor +10, Dodge Chance +5, Critical Chance +5',
        isEquipped:false,
        imgPath:icons[7],
    }}

export const Lamellar = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Lamellar',
        type:'body',
        cost:750,
        value:{
            armor:20,
            blockChance:5,
        },
        description:'Lots of metal layers that imitate fish scales on this warrior chest. Armor +20, Block Chance +5',
        isEquipped:false,
        imgPath:icons[2],
    }}


export const Robe = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Robe',
        type:'body',
        cost:1500,
        value:{
            armor:25,
            magicPower:70,
        },
        description:'An acolyte costume with a masking hood and a long cloak covering the all body like a druid. Armor +25, Magic Power +70',
        isEquipped:false,
        imgPath:icons[8],
    }}

export const BreastPlate = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Breast Plate',
        type:'body',
        cost:1500,
        value:{
            armor:35,
            blockChance:10,
        },
        description:'A metal chest to protect a knight organs in his thorax. Armor +35, Block Chance +10',
        isEquipped:false,
        imgPath:icons[0],
    }}

export const NinjaArmor = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Ninja Armor',
        type:'body',
        cost:1500,
        value:{
            armor:25,
            dodgeChance:7,
            critChance:7
        },
        description:'A long reinforced robe which is better suited than a simple kimono during combats with blades.  Armor +22, Dodge Chance +7, Critical Chance +7',
        isEquipped:false,
        imgPath:icons[6],
    }}
