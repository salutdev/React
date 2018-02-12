import React from 'react'
import {render} from 'react-dom'
import {hello, goodbye} from './lib'
import SkiDayCount from './components/SkiDayCount'

//window.React = React

render(
    <SkiDayCount />,
    document.getElementById('react-container')
)