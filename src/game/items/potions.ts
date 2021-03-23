import { v4 as uuidv4 } from 'uuid';
import getIcons from '../ui/getIcons';

const icons = getIcons(require.context( '../../images/items/potionImages', true, /\.svg$/ ))

export const HealthPotion = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Health Potion',
        type:'potion',
        cost:25,
        value:{},
        description:'Regenerates 25% hp,can be used in combat',
        isEquipped:false,
        imgPath:icons[0], /// sprawdz
    }}

export const ManaPotion = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Mana Potion',
        type:'potion',
        cost:15,
        value:{},
        description:'Regenerates 33% mana, can be used in combat',
        isEquipped:false,
        imgPath:icons[1], /// sprawdz
    }}

export const SuperHealthPotion = ():Item => {
    const id = uuidv4();
    return {
        id,
        name:'Super Health Potion',
        type:'potion',
        cost:50,
        value:{},
        description:'Regenerates 40% hp,can be used in combat',
        isEquipped:false,
        imgPath:icons[2], /// sprawdz
    }}