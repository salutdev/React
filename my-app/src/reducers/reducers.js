import {combineReducers} from 'redux'
import counterReducer from './counter'
import boardStateReducer from './boardStateReducer'
//import turnReducer from './turnReducer'

export default combineReducers({
    count: counterReducer,
    boardState: boardStateReducer,
    //board: boardReducer,
    //turn: turnReducer
})