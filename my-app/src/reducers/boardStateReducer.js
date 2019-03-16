import { MAKE_MOVE, BOARD_SIZE, BOARD_WIDTH} from '../Constants'
import Immutable, { fromJS, setIn } from 'immutable'

export default (boardState, action) => {
    const {type, payload} = action
    boardState = boardState || { board: [...new Array(BOARD_SIZE)].map(e => new Array(BOARD_SIZE).fill(0)), turn: 1, result: null }

    switch(type) {  
        case MAKE_MOVE: return getNewBoardState2(boardState, payload)
        default: return boardState
    }
}

function getNewBoardState(boardState, payload) {
    const {x, y} = payload
    let newTurn = boardState.turn

    const cellWidth = BOARD_WIDTH / BOARD_SIZE

    const arX = parseInt(x / cellWidth) 
    const arY = parseInt(y / cellWidth) 

    if (boardState.board[arY][arX] === 0) {
        const newBoard = [...Array(BOARD_SIZE)].map(e => new Array(BOARD_SIZE).fill(0))
        for (let i = 0; i < BOARD_SIZE; i++) {
            for (let j = 0; j < BOARD_SIZE; j++) {
                newBoard[i][j] = boardState.board[i][j];
            }
        }

        newBoard[arY][arX] = boardState.turn
 
        const newResult = whoWonGame(newBoard, arX, arY)
        if (newResult) {
            newResult.winner = boardState.turn
        }

        newTurn = boardState.turn === 1 ? -1 : 1

        return { board: newBoard, turn: newTurn, result: newResult }
    }
    return boardState
}

function getNewBoardState2(boardState, payload) {
    const {x, y} = payload
    let newTurn = boardState.turn

    const cellWidth = BOARD_WIDTH / BOARD_SIZE

    const arX = parseInt(x / cellWidth) 
    const arY = parseInt(y / cellWidth) 

    if (boardState.board[arY][arX] === 0) {

        let newBoard = fromJS(boardState.board)
        newBoard = newBoard.setIn([arY, arX], boardState.turn)
 
        const newResult = whoWonGame(newBoard, arX, arY)
        if (newResult) {
            newResult.winner = boardState.turn
        }

        newTurn = boardState.turn === 1 ? -1 : 1

        let newPlainBoard = newBoard.toArray().map(a => a.toArray())

        return { board: newPlainBoard, turn: newTurn, result: newResult }
    }
    return boardState
}

function whoWonGame(newBoard, arX, arY) {
    let sumX = 0
    let sumY = 0
    let sumD1 = 0
    let sumD2 = 0
    let result = null;
    for (let i = 0; i < BOARD_SIZE; i++) {
        sumY += newBoard.getIn([arY, i])
        sumX += newBoard.getIn([i, arX])
        
        if (arX === arY) {
            sumD1 += newBoard.getIn([i, i])
        }

        if (arX === BOARD_SIZE - arY - 1) {
            sumD2 += newBoard.getIn([i, BOARD_SIZE-i-1])
        }
    }

    if (Math.abs(sumX) === BOARD_SIZE) {
        result = { X: arX}
    } else if (Math.abs(sumY) === BOARD_SIZE) {
        result = { Y: arY}
    } else if (Math.abs(sumD1) === BOARD_SIZE) {
        result = { D1: 1}
    } else if (Math.abs(sumD2) === BOARD_SIZE) {
        result = { D2: 1}
    }

    return result
}