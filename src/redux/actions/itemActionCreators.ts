import * as actionTypes from './actionTypes'

export const addItem = (item:Item) => {
    const action:actionTypes.ItemAction = {
        type:actionTypes.ADD_ITEM,
        item
    }
    return action
}

export const deleteItem = (item:Item) => {
    const action:actionTypes.ItemAction = {
        type:actionTypes.DELETE_ITEM,
        item
    }
    return action
}

export const clearInventory = () => {
    const action:actionTypes.ItemAction = {
        type:actionTypes.CLEAR_INVENTORY
    }
    return action
}

export const addGold = (gold:number) => {
    const action:actionTypes.ItemAction = {
        type:actionTypes.ADD_GOLD,
        gold
    }
    return action
}  

export const spendGold = (gold:number) => {
    const action:actionTypes.ItemAction = {
        type:actionTypes.SPEND_GOLD,
        gold
    }
    return action
}   