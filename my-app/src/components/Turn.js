import React, { Component } from 'react'
import { connect } from 'react-redux'

class Turn extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>{this.props.turn == 1 ? 'X' : '0'}</div>
    }
}

export default connect(
    (state) => ({ turn: state.turn })
)(Turn)