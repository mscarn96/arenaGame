import { combineReducers } from 'redux'

import battleReducer from './battleReducer'
import champReducer from './champReducer'

const rootReducer = combineReducers({
    champion:champReducer,
    battleState:battleReducer,
})



export type RootState = ReturnType<typeof rootReducer>


export default rootReducer;