import { 
    PLUS, MINUS, PLUS_TEN, MINUS_TEN, 
    DIVIDE_BY_TWO, SET_ZERO, SET_HUNDRED 
} from '../actions/counter';
import { InitialState } from '../store';


export function counterReducer (state = InitialState, action) {
    switch(action.type) {
        case PLUS: return{...state, count: state.count+1}
        case MINUS: return{...state, count: state.count-1}
        case PLUS_TEN: return { ...state, count: state.count + 10 };
        case MINUS_TEN: return { ...state, count: state.count - 10 };
        case DIVIDE_BY_TWO: return { ...state, count: Math.round(state.count / 2) };
        case SET_ZERO: return { ...state, count: 0 };
        case SET_HUNDRED: return { ...state, count: 100 };
        default: return InitialState

    }
}