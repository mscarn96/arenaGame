interface Character {
    id:number
    name:string
    level: number
    hp:number
    accuracy:number
    critChance:number
    attackDamage:number
    magicPower:number
    blockChance:number
    armor:number
    magicDef:number
    dodgeChance:number
    skillset:object[]
}

type Item = {
    id:number
    name:string
    value:number
    description:string
}

interface Champion extends Character {
    champClass:ChampClass
}

type GameState = {
    currentChamp:null | Champion
    gold:number
    inventory:null | Item[]
}

type ChampionAction = {
    type:string
    name:string
    // champion:Champion
    choosedClass?:ChampClass
}

type DispatchType = (args: ChampionAction) => ChampionAction

enum ChampClass {
    Warrior = 0,
    Mage = 1,
    Hunter = 2,
    notPicked = -1,
}
