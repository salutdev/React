import React from 'react'
import { render } from 'react-dom'
import { hello, goodbye } from './lib'
import  { SkiDayList }  from './components/SkiDayList'

window.React = React


render(

    <SkiDayList days={[
        {
            resort: "Squaw Valley",
            date: new Date("1/1/2018"),
            powder: true,
            backcountry: false
        },
        {
            resort: "Kirkwood",
            date: new Date("12/20/2017"),
            powder: false,
            backcountry: false
        },
        {
            resort: "Mt Tallac",
            date: new Date("08/28/2016"),
            powder: false,
            backcountry: true
        }
    ]} />,
    document.getElementById('react-container')
)