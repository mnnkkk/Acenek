import { Action, ActionTypes } from './action';

/** redux store state */
export interface State {
    value: number;
}

export const initialState: State = {
    value: 0,
};

function reducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        case ActionTypes.SetValue: {
            return {
                ...state,
                value: action.payload as number,
            };
        }

        default:
            return state;
    }
}

export default reducer;
