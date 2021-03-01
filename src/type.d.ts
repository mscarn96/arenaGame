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
    expForWin:number
    skillset:Skill[]
}

interface ItemValue {
    accuracy?:number
    critChance?:number
    attackDamage?:number
    magicPower?:number
    blockChance?:number
    armor?:number
    magicDef?:number
    dodgeChance?:number
}

type Stat = 'accuracy' | `critChance` |`attackDamage`|`magicPower` | `blockChance` | `armor` |`magicDef` |`dodgeChance`

type ItemType = 'head' | 'body' | 'feet' | 'neck' | 'rightHand' | 'leftHand'


type Item = {
    id:string
    name:string
    cost:number
    type:ItemType
    value:ItemValue
    description:string
    isEquipped:boolean
}




interface Champion extends Character {
    champClass:ChampClass
    res: {
        name:string
        current:number
        full:number
    }
    exp:number,
    itemSlots:{
        head:Item | null
        body:Item | null
        feet:Item | null
        neck:Item | null
        rightHand:Item | null
        leftHand:Item | null
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


// type DispatchType = (args: CreateChampionAction | ChampionModifyAction) => CreateChampionAction | ModifyChampionAction

enum ChampClass {
    Warrior = 0,
    Mage = 1,
    Hunter = 2,
    notPicked = -1,
}


type TurnResult = {
    statusText:string,
    effectNumber?:number
}

type AttackResult = TurnResult & {
    damage:number
}



type Place = {
    name:string
    image:string
}


interface AttackSkill {
    name:string,
    id:number,
    cost:number,
    type:`DAMAGE`,
    effect:((champ:Champion,defender:Enemy) => AttackResult),
}

interface EffectSkill {
    name:string,
    id:number,
    cost:number,
    stat:Stat,
    type:`EFFECT`,
    effect:((champ:Champion,defender:Enemy) => TurnResult),
}

type Skill = EffectSkill | AttackSkill

interface ResultInfo {
    playerWon:boolean
    didLevelUp:boolean
    goldEarned?:number
    expGained?:number
}