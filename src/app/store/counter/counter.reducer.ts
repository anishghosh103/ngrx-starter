import { Action } from '@ngrx/store';
import { ActionTypes } from './counter.actions';

export const initialState = {
    count: 0
};

export function counterReducer(state = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.Increment:
            return { ...state, count: state.count + 1 };

        case ActionTypes.Decrement:
            return { ...state, count: state.count - 1 };

        case ActionTypes.Reset:
            return initialState;

        default:
            return state;
    }
}