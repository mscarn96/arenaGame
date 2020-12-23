type Character = {
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

type Champion = Character & {
    class:string
}

type State = {
    currentChamp:null | Champion
    gold:number
    inventory:null | Item[]
}

type ChampionAction = {
    type:string
    champion:Champion
}
