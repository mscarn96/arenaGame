import ThunderLordImg from '../../images/mobs/arena/ThunderlordImg.webp'
import DarkKnightImg from '../../images/mobs/arena/DarkKnightImg.webp'
import ArchangelImg from '../../images/mobs/arena/ArchangelImg.webp'


const ThunderLord:Character =
    {
        id:401,
        name:'Nysenth The Thunder Lord',
        level: 10,
        hp: {
            currentHp:1000,
            fullHp:1000,
        },
        accuracy:70,
        critChance:30,
        attackDamage:90,
        magicPower:0,
        blockChance:25,
        armor:40,
        magicDef:30,
        dodgeChance:25,
        expForWin:500,
        skillset:[],
        image:ThunderLordImg,
        }

const DarkKnight:Character =
    {
        id:401,
        name:'Dalzrir The Dark Knight',
        level: 10,
        hp: {
            currentHp:1500,
            fullHp:1500,
        },
        accuracy:60,
        critChance:40,
        attackDamage:100,
        magicPower:0,
        blockChance:30,
        armor:35,
        magicDef:25,
        dodgeChance:20,
        expForWin:500,
        skillset:[],
        image:DarkKnightImg,
        imgCred:`Conor Durke`
        }

const Archangel:Character =
    {
        id:401,
        name:'Asteraoth The Archangel',
        level: 10,
        hp: {
            currentHp:2000,
            fullHp:2000,
        },
        accuracy:80,
        critChance:50,
        attackDamage:120,
        magicPower:0,
        blockChance:50,
        armor:50,
        magicDef:35,
        dodgeChance:25,
        expForWin:1000,
        skillset:[],
        image:ArchangelImg,
        }

const towerMobs = [ThunderLord,DarkKnight,Archangel]

export default towerMobs