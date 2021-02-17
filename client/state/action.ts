import { User } from './reducer';

export enum ActionTypes {
    SetValue = 'SetValue',
    SetUser = 'SetUser',
}

export type SetValuePayload = Number;

export type SetUserPayload = User;

export interface Action {
    type: ActionTypes;
    payload:
        | SetValuePayload
        | SetUserPayload
        | Object
}
