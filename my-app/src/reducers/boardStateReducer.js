import { MAKE_MOVE, BOARD_SIZE, BOARD_WIDTH} from '../Constants'

export default (boardState, action) => {
    const {type, payload} = action
    boardState = boardState || { board: [...new Array(BOARD_SIZE)].map(e => new Array(BOARD_SIZE).fill(0)), turn: 1, won: 0 }

    switch(type) {  
        case MAKE_MOVE: return getNewBoardState(boardState, payload)
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
        newTurn = boardState.turn === 1 ? -1 : 1

        const won = whoWonGame(newBoard, arX, arY)

        return { board: newBoard, turn: newTurn, won }
    }
    return boardState
}

function whoWonGame(newBoard, arX, arY) {



}