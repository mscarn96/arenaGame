import * as actionTypes from '../actions/actionTypes'
import {Bandana, BrodieHelmet} from '../../game/items/helmets'

const initialState:InventoryState = {
    gold:0,
    items:[BrodieHelmet(),Bandana()]
}

const itemReducer = (state = initialState, action: actionTypes.ItemAction):InventoryState => {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            return {
                ...state,
                items:[...state.items, action.item]
            }
        case actionTypes.DELETE_ITEM:
            const newItems = [...state.items].filter(item => item.id !== action.item.id )
            return {
                ...state,
                items:newItems
            }
        default:
            {
                return {...state}
            }
    }
}

export default itemReducer;