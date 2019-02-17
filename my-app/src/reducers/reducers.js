import {combineReducers} from 'redux'
import counterReducer from './counter'
import boardReducer from './boardReducer'
import turnReducer from './turnReducer'

export default combineReducers({
    count: counterReducer,
    board: boardReducer,
    turn: turnReducer
})