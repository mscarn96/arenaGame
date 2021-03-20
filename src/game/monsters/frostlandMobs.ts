import FrostWormImg from '../../images/mobs/frostland/FrostWormImg.jpg'
import FrostWolfImg from '../../images/mobs/frostland/FrostWolfImg.jpg'
import FrostQueenImg from '../../images/mobs/frostland/FrostQueenImg.jpg'
import FrostDragonImg from '../../images/mobs/frostland/FrostDragonImg.jpg'



const FrostWorm:Character =
    {
        id:301,
        name:'Frost Worm',
        level: 6,
        hp: {
            currentHp:420,
            fullHp:420,
        },
        accuracy:60,
        critChance:12,
        attackDamage:64,
        magicPower:0,
        blockChance:14,
        armor:22,
        magicDef:12,
        dodgeChance:6,
        expForWin:125,
        skillset:[],
        image:FrostWormImg,
        imgCred:`Wizards of the Coast`,

        }

const FrostWolf:Character =
    {
        id:302,
        name:'Frost Wolf',
        level: 7,
        hp: {
            currentHp:475,
            fullHp:475,
        },
        accuracy:60,
        critChance:15,
        attackDamage:68,
        magicPower:0,
        blockChance:17,
        armor:24,
        magicDef:12,
        dodgeChance:7,
        expForWin:150,
        skillset:[],
        image:FrostWolfImg
        }

const FrostQueen:Character =
    {
        id:303,
        name:'Frost Queen',
        level: 8,
        hp: {
            currentHp:500,
            fullHp:500,
        },
        accuracy:62,
        critChance:20,
        attackDamage:70,
        magicPower:0,
        blockChance:20,
        armor:25,
        magicDef:15,
        dodgeChance:8,
        expForWin:200,
        skillset:[],
        image:FrostQueenImg
        }

const FrostDragon:Character =
    {
        id:304,
        name:'Frost Dragon',
        level: 9,
        hp: {
            currentHp:650,
            fullHp:650,
        },
        accuracy:65,
        critChance:25,
        attackDamage:80,
        magicPower:0,
        blockChance:25,
        armor:30,
        magicDef:20,
        dodgeChance:10,
        expForWin:300,
        skillset:[],
        image:FrostDragonImg,
        }

const frostlandMobs = [FrostDragon,FrostQueen,FrostWolf,FrostWorm]

export default frostlandMobs