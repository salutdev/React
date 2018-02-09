const { createElement } = React
const { render } = ReactDOM

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

render(
    <h1 id='title'
        className='header'
        style={{
            backgroundColor: 'grey',
            color: 'white',
            fontFamily: 'verdana'
        }}>
        Initial App 1
    </h1>,
    document.getElementById('react-container')
)