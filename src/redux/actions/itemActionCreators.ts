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