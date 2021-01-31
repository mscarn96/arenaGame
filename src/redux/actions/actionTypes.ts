export const CREATE_CHAMP = "CREATE_CHAMP"
export const MODIFY_CHAMP = "MODIFY_CHAMP"
export const INIT_BATTLE = "INIT_BATTLE"
export const END_BATTLE = "END_BATTLE"
export const DAMAGE_CHAMPION = "DAMAGE_CHAMPION"
export const HEAL_CHAMPION = "HEAL_CHAMPION"
export const DAMAGE_ENEMY = "DAMAGE_ENEMY"


interface CreateChampionAction {
    type:typeof CREATE_CHAMP
    name:string
    choosedClass:ChampClass
}

interface ModifyChampionAction {
    type:typeof MODIFY_CHAMP
    champ:Champion
}

interface InitBattleAction {
    type:typeof INIT_BATTLE
    champ:Champion
    enemy:Enemy
    place:Place
}

interface EndBattleAction {
    type:typeof END_BATTLE
}

export type ChampionAction  = CreateChampionAction | ModifyChampionAction

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

export type BattleAction = DamageChampionAction | DamageEnemyAction | HealChampionAction | InitBattleAction | EndBattleAction

export type StateAction = BattleAction | ChampionAction


// https://redux.js.org/recipes/usage-with-typescript
//https://redux.js.org/tutorials/essentials/part-1-overview-concepts