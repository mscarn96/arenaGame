import { v4 as uuidv4 } from 'uuid';

export const BrodieHelmet = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Brodie Helmet',
        type:'head',
        value:{
            armor:5,
            magicDef:3
        },
        description:'Basic head item. Armor +5, Magic Defence +3',
        isEquipped:false,
    }}

    export const Bandana = ():Item => {
        const id = uuidv4();
        return {
            id,
            name:'Bandana',
            type:'head',
            value:{
                armor:3,
                dodgeChance:3
            },
            description:'A cloth put on the top of the head. Armor +3, Dodge Chance +3',
            isEquipped:false,
        }}
    
    