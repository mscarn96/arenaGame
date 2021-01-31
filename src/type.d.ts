interface Character {
    id:number
    name:string
    level: number
    hp: {
        currentHp:number
        fullHp:number
    }
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
    res: {
        name:string
        current:number
        full:number
    }
}

type Enemy = Character | Champion


type ChampState = {currentChamp:Champion}
type InventoryState = {
    gold:number,
    items:Item[]
}
type BattleState = {
    champ:Champion
    enemy:Enemy
    place:Place
}


type DispatchType = (args: CreateChampionAction | ChampionModifyAction) => CreateChampionAction | ModifyChampionAction

enum ChampClass {
    Warrior = 0,
    Mage = 1,
    Hunter = 2,
    notPicked = -1,
}

enum AttackResultStatus {
    dodge = 0,
    block = 1,
    crit = 2
}

type AttackResult = {
    damage:number
    statusText:string
    statusCode:AttackResultStatus
}

type Place = {
    name:string
    image:string
}
