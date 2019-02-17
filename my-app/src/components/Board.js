import React, { Component } from 'react'
import '../styles/Board.css'
import {connect} from 'react-redux'
import {moveAC} from '../AC/index'


class Board extends Component {

    constructor(props) {
        super(props)
        //this.state = {a: 0}
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.drawBoard();
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
        this.drawBoard();
    }

    drawBoard() {
        const c = document.getElementById("myCanvas");
        const ctx = c.getContext("2d");

        this.drawBar(ctx)
        this.fillMoves(ctx)
    }

    drawBar(ctx) {
        ctx.strokeStyle = "#0000FF"
        ctx.lineWidth = 2

        for (let i = 1; i <= 301; i += 100)
        {
            this.drawLine(i, 0, i, 300, ctx)
            this.drawLine(0, i, 300, i, ctx)
        }
    }

    drawLine(x1, y1 , x2, y2, ctx) {
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
    }

    fillMoves(ctx) {
        ctx.font = "30px Arial"
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.props.board[i][j] == 1) {
                    ctx.fillText('X', j*100 + 40, i*100 + 65)
                } else if (this.props.board[i][j] == -1) {
                    ctx.fillText('0', j*100 + 40, i*100 + 65)
                }
            }
        }
    }

    handleClick = (evt) => {
        this.props.makeMove(evt.nativeEvent.layerX, evt.nativeEvent.layerY, this.props.turn)
    }

    render() {
        console.log('render')
        return(
            <canvas onClick={ this.handleClick } id="myCanvas" width="302px" height="302px" className=""></canvas>
        )
    }
}

export const BoardDec = connect((state) => {
        return { board: state.board, turn: state.turn }
    },
    { makeMove: moveAC }
)(Board)