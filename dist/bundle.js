'use strict';

var _React = React,
    createElement = _React.createElement;
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;

// const style = {
//     backgroundColor: 'grey',
//     color: 'white',
//     fontFamily: 'verdana'
// }

// const title = createElement(
//     'h1',
//     { id: 'title', className: 'header', style: style },
//     'Init App'
// )

render(React.createElement(
    'h1',
    { id: 'title',
        className: 'header',
        style: {
            backgroundColor: 'grey',
            color: 'white',
            fontFamily: 'verdana'
        } },
    'Initial App'
), document.getElementById('react-container'));
