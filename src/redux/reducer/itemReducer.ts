import * as actionTypes from '../actions/actionTypes'


const initialState:InventoryState = {
    gold:0,
    items:[]
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
        case actionTypes.CLEAR_INVENTORY:
            return initialState
        case actionTypes.ADD_GOLD:
            return {
                ...state,
                gold:state.gold + action.gold
            }
        case actionTypes.SPEND_GOLD:
            return {
                ...state,
                gold:state.gold - action.gold
            }
        default:
            {
                return {...state}
            }
    }
}

export default itemReducer;