import React, { Component } from 'react'
import {connect} from 'react-redux'


class Result extends Component {
    render() {
        const winner = this.props.result ? this.props.result.winner : null
        return (
            <h2 className={winner ? 'visible' : 'invisible'}>{winner === 1 ? 'X' : '0'} is winner</h2>
        )
    }
}

export default connect(
    state => ({
        result: state.boardState.result
    })
)(Result)