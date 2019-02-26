import React, { Component } from 'react'
import '../styles/Board.css'
import { connect } from 'react-redux'
import { moveAC } from '../AC/index'
import { BOARD_SIZE, BOARD_WIDTH } from '../Constants'

class Board extends Component {

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
        if (this.props.result) {
            this.drawWinLine(this.props.result, ctx)
        }
    }

    drawWinLine(result, ctx) {

        ctx.strokeStyle = "#00FF00"
        ctx.lineWidth = 5
  
        if (result.X !== undefined) {
            let x = this.getCellWidth() * (result.X + 0.5)
            this.drawLine(x, 0, x, BOARD_WIDTH, ctx)
        } else if (result.Y !== undefined) {
            let y = this.getCellWidth() * (result.Y + 0.5)
            this.drawLine(0, y, BOARD_WIDTH, y, ctx)
        } else if (result.D1 !== undefined) {
             this.drawLine(0, 0, BOARD_WIDTH, BOARD_WIDTH, ctx)
        } else if (result.D2 !== undefined) {
            this.drawLine(0, BOARD_WIDTH, BOARD_WIDTH, 0, ctx)
       }
        console.log("Draw win line")
    }

    drawBar(ctx) {
        ctx.strokeStyle = "#0000FF"
        ctx.lineWidth = 2

        const cellWidth = this.getCellWidth()

        for (let i = 1; i <= BOARD_WIDTH + 1; i += cellWidth)
        {
            this.drawLine(i, 0, i, BOARD_WIDTH, ctx)
            this.drawLine(0, i, BOARD_WIDTH, i, ctx)
        }

        console.log("Draw bars")
    }

    getCellWidth() {
        return BOARD_WIDTH / BOARD_SIZE
    }

    drawLine(x1, y1 , x2, y2, ctx) {
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
    }

    fillMoves(ctx) {
        const cellWidth = this.getCellWidth()

        ctx.font = cellWidth/3 + "px Arial"

        for (let i = 0; i < BOARD_SIZE; i++) {
            for (let j = 0; j < BOARD_SIZE; j++) {
                if (this.props.board[i][j] === 1) {
                    ctx.fillText('X', j*cellWidth + cellWidth * 2/5, i*cellWidth + cellWidth * 65/100)
                } else if (this.props.board[i][j] === -1) {
                    ctx.fillText('0', j*cellWidth + cellWidth * 2/5, i*cellWidth + cellWidth * 65/100)
                }
            }
        }
    }

    handleClick = (evt) => {
        if (!this.props.result) {
            this.props.makeMove(evt.nativeEvent.layerX, evt.nativeEvent.layerY)
        }
    }

    render() {
        console.log('render')
        return(
            <canvas onClick={ this.handleClick } id="myCanvas" width={(BOARD_WIDTH + 2) + "px"} height={(BOARD_WIDTH + 2) + "px"} className=""></canvas>
        )
    }
}

export const BoardDec = connect((state) => {
        return { board: state.boardState.board, result: state.boardState.result }
    },
    { makeMove: moveAC }
)(Board)