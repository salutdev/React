import {combineReducers} from 'redux'
import counterReducer from './counter'
import boardStateReducer from './boardStateReducer'

export default combineReducers({
    count: counterReducer,
    boardState: boardStateReducer,
})