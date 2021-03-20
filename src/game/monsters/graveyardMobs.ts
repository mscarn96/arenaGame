import UndeadLionImg from '../../images/mobs/graveyard/UndeadLionImg.jpg'
import SkeletonMageImg from '../../images/mobs/graveyard/SkeletonMageImg.jpg'
import SkeletonKnightImg from '../../images/mobs/graveyard/SkeletonKnightImg.jpg'
import GrimReaperImg from '../../images/mobs/graveyard/GrimReaperImg.jpg'


const UndeadLion:Character =
{id:101,
    name:'Undead Lion',
    level: 1,
    hp: {
        currentHp:120,
        fullHp:120,
    },
    accuracy:50,
    critChance:3,
    attackDamage:27,
    magicPower:0,
    blockChance:5,
    armor:6,
    magicDef:5,
    dodgeChance:10,
    expForWin:20,
    skillset:[],
    image:UndeadLionImg,
    }

const SkeletonKnight:Character =
{   id:103,
    name:'Skeleton Knight',
    level: 2,
    hp: {
        currentHp:180,
        fullHp:180,
    },
    accuracy:50,
    critChance:2,
    attackDamage:30,
    magicPower:0,
    blockChance:5,
    armor:10,
    magicDef:8,
    dodgeChance:5,
    expForWin:25,
    skillset:[],
    image:SkeletonKnightImg,
    imgCred:`Andrew Kuzinskiy`,
    }


const SkeletonMage:Character =
{   id:102,
    name:'Skeleton Mage',
    level: 2,
    hp: {
        currentHp:130,
        fullHp:130,
    },
    accuracy:53,
    critChance:5,
    attackDamage:35,
    magicPower:0,
    blockChance:2,
    armor:5,
    magicDef:3,
    dodgeChance:6,
    expForWin:25,
    skillset:[],
    image:SkeletonMageImg,
    }

    
const GrimReaper:Character =
{   id:104,
    name:'Grim Reaper',
    level: 3,
    hp: {
        currentHp:240,
        fullHp:240,
    },
    accuracy:55,
    critChance:8,
    attackDamage:42,
    magicPower:0,
    blockChance:7,
    armor:12,
    magicDef:10,
    dodgeChance:8,
    expForWin:50,
    skillset:[],
    image:GrimReaperImg,
    imgCred:`Anton Fort`
    }

const graveyardMobs = [UndeadLion,SkeletonKnight,SkeletonMage,GrimReaper]

export default graveyardMobs;