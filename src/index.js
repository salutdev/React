import React from 'react'
import { render } from 'react-dom'
import { hello, goodbye } from './lib'
import  { SkiDayList }  from './components/SkiDayList'
//import  { SkiDayCount }  from './components/SkiDayCount-createReactClass'
//import  { SkiDayCount }  from './components/SkiDayCount-ES6'
import  { SkiDayCount }  from './components/SkiDayCount'
import { App } from './components/App'

window.React = React


// render(

//     <SkiDayCount />,
//     document.getElementById('react-container')
// )

render(

    <App />,
    // <SkiDayCount />,
    document.getElementById('react-container')
)