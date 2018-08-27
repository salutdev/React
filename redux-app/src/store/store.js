import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/combinedReducer'
import logger from './middlewares/logger'

const enhancer = applyMiddleware(logger)

const store = createStore(reducer, {title: 'A', counter: 1}, enhancer)
window.store = store

// store.subscribe(() => {
//     console.log('Store has changed')
// })

// store.dispatch({type: 'INC'})
// store.dispatch({type: 'INC'})
// store.dispatch({type: 'INC'})

// console.log(store.getState())

export default store