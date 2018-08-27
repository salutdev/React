import React from 'react'
import { connect } from 'react-redux'
import incrementCounter from '../store/AC/incCounterAC'


class ButtonP extends React.Component {

    handleClick = () => {
        //this.props.dispatch({type: 'INC', increment: this.props.increment}) // if arguments to conntct are not specified
        this.props.incrementCounter(this.props.operation, this.props.num)
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.props.operation}{this.props.num}
            </button>
        )
    }
}

//const mapToDispatch = { incrementCounter }

const Button = connect( // if arguments are not specified dispatch is available in component in props
    null, // doesn't read state from the store
    { incrementCounter }
)(ButtonP)

export default Button