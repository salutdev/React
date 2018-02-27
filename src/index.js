import React from 'react'
import { render } from 'react-dom'
import { hello, goodbye } from './lib'
import  { SkiDayList }  from './components/SkiDayList'
//import  { SkiDayCount }  from './components/SkiDayCount-createReactClass'
//import  { SkiDayCount }  from './components/SkiDayCount-ES6'
import  { SkiDayCount }  from './components/SkiDayCount'
import { App } from './components/App'
//import { Router, Route, hashHistory } from 'react-router'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import { Whoops404 } from './components/Whoops404'
import { AddDayForm } from './components/AddDayFormStateless';

window.React = React


// render(

//     <SkiDayCount />,
//     document.getElementById('react-container')
// )

render(

    <HashRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/list-days" component={App}></Route>
        <Route exact path="/list-days/:filter"  component={App} />
        <Route exact path="/add-day" component={App} />
        <Route component={Whoops404} />
      </Switch>
   </HashRouter>,

    // <Router history={hashHistory}>
    //     <Route path="/" component={App} />
    //     <Route path="*" component={Whoops404} />
    // </Router>,
    // <SkiDayCount />,
    document.getElementById('react-container')
)