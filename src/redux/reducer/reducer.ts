import { combineReducers } from 'redux'

import battleReducer from './battleReducer'
import champReducer from './champReducer'
import itemReducer from './itemReducer';

const rootReducer = combineReducers({
    champion:champReducer,
    battleState:battleReducer,
    InventoryState:itemReducer,
})



export type RootState = ReturnType<typeof rootReducer>


export default rootReducer;