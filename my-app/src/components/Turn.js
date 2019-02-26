import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/Board.css'

class Turn extends Component {

    render() {
        const { turn, result } = this.props
        return <h2 className={result ? 'invisible' : 'visible'}>Move turn: {turn === 1 ? 'X' : '0'}</h2>
    }
}

export default connect(
    (state) => ({ turn: state.boardState.turn, result: state.boardState.result })
)(Turn)