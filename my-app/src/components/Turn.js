import React, { Component } from 'react'
import { connect } from 'react-redux'

class Turn extends Component {

    render() {
        return <h2>Move turn: {this.props.turn === 1 ? 'X' : '0'}</h2>
    }
}

export default connect(
    (state) => ({ turn: state.boardState.turn })
)(Turn)