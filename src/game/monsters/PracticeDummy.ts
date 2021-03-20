import PracticeDummyImg from '../../images/mobs/PracticeDummyImg.jpg'


const PracticeDummy = (level:number):Character =>
{ 
return {id:101,
    name:'Practice Dummy',
    level: 1*level,
    hp: {
        currentHp:100 + level * 10,
        fullHp:100 + level * 10,
    },
    accuracy:50 + level * 3,
    critChance:3 + level * 3,
    attackDamage:27 + level * 5,
    magicPower:0,
    blockChance:5 + level * 2,
    armor:6 + level * 5,
    magicDef:5 + level * 5,
    dodgeChance:10 + level * 2,
    expForWin:0,
    skillset:[],
    image:PracticeDummyImg,
    imgCred:`Paul Carstens`
    }
}

export default PracticeDummy