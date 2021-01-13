import { INCREMENT, DECREMENT, NUM_NEGATIVE } from "../constants/action-types";

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const num_negtive = () => {
    return {
        type: NUM_NEGATIVE
    }
}
