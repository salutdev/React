
import {INCREASE_CLICKS} from '../Constants'

export default (turn = 1, action) => {
    const {type, payload} = action
    let newBoard;
    switch(type) {  
        case INCREASE_CLICKS: 
        return turn == 1 ? -1 : 1
    }

    return turn
}
