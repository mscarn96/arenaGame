import { v4 as uuidv4 } from 'uuid';

// const armorSvgs = require.context( '../../images/items/armorImages', true, /\.svg$/ )

// const allArmorFilepaths = armorSvgs.keys();

// const imagePath = allArmorFilepaths[0]
// const image = armorSvgs(imagePath).default

// const getIcons = (svgs: __WebpackModuleApi.RequireContext) => {
//     const icons:any[] = [];
//     const allIconsFilepaths = svgs.keys()
//     allIconsFilepaths.forEach((svg, index) => {
//         icons.push(svgs(svg).default)
//     })
//     return icons

// }

//THIS WORKS ^^
//ZROB OGOLNA FUNKCJE I DOPASUJ DO ITEMKOW



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
    }}
//https://game-icons.net/1x1/lorc/mail-shirt.html

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
    }}
//https://game-icons.net/1x1/delapouite/leather-armor.html

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
    }}
//https://game-icons.net/1x1/delapouite/loincloth.html

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
    }}
//https://game-icons.net/1x1/delapouite/cape-armor.html


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
    }}
//https://game-icons.net/1x1/delapouite/pirate-coat.html

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
    }}
//https://game-icons.net/1x1/lorc/lamellar.html


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
    }}
//https://game-icons.net/1x1/lorc/robe.html

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
    }}
//https://game-icons.net/1x1/lorc/breastplate.html

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
    }}
//https://game-icons.net/1x1/delapouite/ninja-armor.html
