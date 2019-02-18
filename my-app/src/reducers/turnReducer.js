
import { MAKE_MOVE } from '../Constants'

export default (turn = 1, action) => {
    const {type, payload} = action
    let newBoard;
    switch(type) {  
        case MAKE_MOVE: 
        return turn == 1 ? -1 : 1
    }

    return turn
}
