import React, { Component } from 'react'
import { connect } from 'react-redux'

class Turn extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <h2>{this.props.turn == 1 ? 'X' : '0'}</h2>
    }
}

export default connect(
    (state) => ({ turn: state.boardState.turn })
)(Turn)