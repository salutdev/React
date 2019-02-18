import {INCREMENT, MAKE_MOVE} from '../Constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function moveAC(x, y) {
    return {
        type: MAKE_MOVE,
        payload: { x, y }
    }
}