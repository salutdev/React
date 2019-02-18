import { MAKE_MOVE } from '../Constants'

export default (boardState = { board: [... new Array(3)].map(e => new Array(3).fill(0)), turn: 1 }, action) => {
    const {type, payload} = action
    switch(type) {  
        case MAKE_MOVE: 
        return getNewBoardState(boardState, payload)
    }

    return boardState
}

function getNewBoardState(boardState, payload) {
    const {x, y} = payload
    let newTurn = boardState.turn

    const arX = parseInt(x / 100) 
    const arY = parseInt(y / 100) 

    if (boardState.board[arY][arX] == 0) {
        const newBoard = [... new Array(3)].map(e => new Array(3).fill(0))
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                newBoard[i][j] = boardState.board[i][j];
            }
        }

        newBoard[arY][arX] = boardState.turn
        newTurn = boardState.turn == 1 ? -1 : 1

        console.log(newBoard, arX, ' ', arY)
        return { board: newBoard, turn: newTurn}
    }
    return boardState
}