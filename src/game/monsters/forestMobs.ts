const ForestWolf:Character =
{id:101,
    name:'Forest Wolf',
    level: 3,
    hp: {
        currentHp:250,
        fullHp:250,
    },
    accuracy:53,
    critChance:6,
    attackDamage:40,
    magicPower:0,
    blockChance:8,
    armor:13,
    magicDef:9,
    dodgeChance:10,
    expForWin:50,
    skillset:[],
    }

const GoldenDeer:Character =
{id:101,
    name:'Golden Deer',
    level: 4,
    hp: {
        currentHp:300,
        fullHp:300,
    },
    accuracy:55,
    critChance:6,
    attackDamage:55,
    magicPower:0,
    blockChance:12,
    armor:15,
    magicDef:8,
    dodgeChance:5,
    expForWin:80,
    skillset:[],
    }

const ForestProtector:Character =
    {id:101,
        name:'Forest Protector',
        level: 4,
        hp: {
            currentHp:320,
            fullHp:320,
        },
        accuracy:52,
        critChance:2,
        attackDamage:50,
        magicPower:0,
        blockChance:15,
        armor:20,
        magicDef:15,
        dodgeChance:3,
        expForWin:80,
        skillset:[],
        }

const ForestLord:Character =
        {id:101,
            name:'Forest Protector',
            level: 5,
            hp: {
                currentHp:360,
                fullHp:360,
            },
            accuracy:58,
            critChance:10,
            attackDamage:60,
            magicPower:0,
            blockChance:12,
            armor:18,
            magicDef:10,
            dodgeChance:5,
            expForWin:100,
            skillset:[],
            }
const forestMobs = [ForestWolf, GoldenDeer,ForestProtector,ForestLord]

export default forestMobs