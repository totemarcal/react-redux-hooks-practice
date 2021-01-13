import { DECREMENT, NUM_NEGATIVE } from '../constants/action-types'

const counterMiddleware = ({dispatch, getState }) => next => action =>{
    if (action.type === DECREMENT){
        const {counter} = getState()
        if (counter === 0)
        return dispatch({ type: NUM_NEGATIVE})
    }
    return next(action)
}

export default counterMiddleware