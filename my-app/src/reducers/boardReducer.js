
import {INCREASE_CLICKS} from '../Constants'
import store from '../store/store'

export default (board = [...Array(3)].map(e => Array(3).fill(0)), action) => {
    const {type, payload} = action
    let newBoard;
    switch(type) {  
        case INCREASE_CLICKS: 
        newBoard = processMove(board, payload)
        return newBoard
    }

    return board
}

function processMove(board, payload) {
    const {x, y, turn} = payload

    const arX = parseInt(x / 100) 
    const arY = parseInt(y / 100) 

    if (board[arY][arX] == 0) {
        const newBoard = [... new Array(3)].map(e => new Array(3).fill(0))
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                newBoard[i][j] = board[i][j];
            }
        }

        newBoard[arY][arX] = turn
        console.log(newBoard, arX, ' ', arY)
        return newBoard
    }
    return board;
}