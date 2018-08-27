import React from 'react'
import ReactDOM from 'react-dom'
//import * as Redux from 'redux'
//import {createStore} from 'redux'
import store from './store/store'
import { Provider, connect } from 'react-redux'
import App from './components/app'

// const App = connect(
//     null, // () => { return {} }, for data - props. Whatever returns from this function will be available as props
//     null //() => { return {} }    for behaviour
// )(AppP)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('react-container')
)