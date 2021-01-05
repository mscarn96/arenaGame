const initChamp = (name:string, champClass:ChampClass):Champion => {
    switch (champClass) {
        case 0:
            return {
                id:0,
                name,
                champClass,
                level: 1,
                hp:{
                    currentHp:250,
                    fullHp:250
                },
                res:{
                    name:'rage',
                    current:0,
                    full:100
                },
                accuracy:60,
                critChance:10,
                attackDamage:60,
                magicPower:0,
                blockChance:15,
                armor:25,
                magicDef:18,
                dodgeChance:5,
                skillset:[]}
        case 1:
            return {
                id:0,
                name,
                champClass,
                level: 1,
                hp:{
                    currentHp:180,
                    fullHp:180
                },
                res:{
                    name:'mana',
                    current:80,
                    full:80
                },
                accuracy:70,
                critChance:0,
                attackDamage:40,
                magicPower:20,
                blockChance:5,
                armor:17,
                magicDef:20,
                dodgeChance:8,
                skillset:[]
            }
        case 2:
                return {
                    id:0,
                    name,
                    champClass,
                    level: 1,
                    hp:{
                        currentHp:200,
                        fullHp:200,
                    },
                    res:{
                        name:'focus',
                        current:100,
                        full:100,
                    },
                    accuracy:80,
                    critChance:20,
                    attackDamage:50,
                    magicPower:5,
                    blockChance:0,
                    armor:20,
                    magicDef:15,
                    dodgeChance:20,
                    skillset:[]
                }    
        default:
            throw new Error(`champion class of id${champClass} doesn't exist!`);
    }   
}

export default initChamp;