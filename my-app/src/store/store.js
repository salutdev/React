import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducers/reducers'
import sign from '../middlewares/signCalculator'

const enhancer = applyMiddleware(sign)

const store = createStore(reducer, {}, enhancer)

//window.store = store

export default store