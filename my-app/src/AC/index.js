import {INCREMENT, INCREASE_CLICKS} from '../Constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function moveAC(x, y, turn) {
    return {
        type: INCREASE_CLICKS,
        payload: { x, y, turn }
    }
}