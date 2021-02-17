import {Action, ActionTypes} from './action';


// 用户信息
export interface User {
    _id: string;
    userName: string;
}

// 记账种类信息
export interface Category {
    _id: string;
    name: string;
}

// 记账条目
export interface Entry {
    _id: string;
    categoryId: string;
    name: string;
    amount: number;
    createTime: string;
}

/** redux store state */
export interface State {
    value: number;

    user: User | null;
    entries: Entry[];
}

export const initialState: State = {
    value: 0,

    user: null,
    entries: [],
};

function reducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        case ActionTypes.SetValue: {
            return {
                ...state,
                value: action.payload as number,
            };
        }

        case ActionTypes.SetUser: {
            return {
                ...state,
                user: action.payload as User,
            }
        }

        default:
            return state;
    }
}

export default reducer;
