export const CREATE_CHAMP = "CREATE_CHAMP"
export const MODIFY_CHAMP = "MODIFY_CHAMP"
export const DELETE_CHAMP = "DELETE_CHAMP"

export const INIT_BATTLE = "INIT_BATTLE"
export const END_BATTLE = "END_BATTLE"
export const DAMAGE_CHAMPION = "DAMAGE_CHAMPION"
export const HEAL_CHAMPION = "HEAL_CHAMPION"
export const DAMAGE_ENEMY = "DAMAGE_ENEMY"
export const USE_RESOURCE = "USE_RESOURCE"
export const AFFECT_ENEMY = "AFFECT_ENEMY"

export const ADD_ITEM = "ADD_ITEM"
export const DELETE_ITEM = "DELETE_ITEM"
export const CLEAR_INVENTORY = "CLEAR_INVENTORY"
export const ADD_GOLD = "ADD_GOLD"
export const SPEND_GOLD = "SPEND_GOLD"


interface CreateChampionAction {
    type:typeof CREATE_CHAMP
    name:string
    choosedClass:ChampClass
}

interface ModifyChampionAction {
    type:typeof MODIFY_CHAMP
    champ:Champion
}

interface DeleteChampionAction {
    type:typeof DELETE_CHAMP
}

export type ChampionAction  = CreateChampionAction | ModifyChampionAction | DeleteChampionAction

interface InitBattleAction {
    type:typeof INIT_BATTLE
    champ:Champion
    enemy:Enemy
    place:Place
}

interface EndBattleAction {
    type:typeof END_BATTLE
}

interface DamageChampionAction {
    type:typeof DAMAGE_CHAMPION
    damage:number
}

interface HealChampionAction {
    type:typeof HEAL_CHAMPION
    heal:number
}

interface DamageEnemyAction {
    type:typeof DAMAGE_ENEMY
    damage:number
}

interface AffectEnemyAction {
    type:typeof AFFECT_ENEMY
    stat:Stat
    effect:number
}

interface UseResourceAction {
    type:typeof USE_RESOURCE
    cost:number
}

export type BattleAction = DamageChampionAction | DamageEnemyAction | HealChampionAction | InitBattleAction | EndBattleAction | UseResourceAction | AffectEnemyAction

interface AddItemAction {
    type:typeof ADD_ITEM
    item:Item
}

interface DeleteItemAction {
    type:typeof DELETE_ITEM
    item:Item
}

interface ClearInventoryAction {
    type:typeof CLEAR_INVENTORY
}

interface AddGoldAction {
    type:typeof ADD_GOLD
    gold:number
}

interface SpendGoldAction {
    type:typeof SPEND_GOLD
    gold:number
}

export type ItemAction = AddItemAction | DeleteItemAction | ClearInventoryAction | AddGoldAction | SpendGoldAction

export type StateAction = BattleAction | ChampionAction | ItemAction


// https://redux.js.org/recipes/usage-with-typescript
//https://redux.js.org/tutorials/essentials/part-1-overview-concepts