import { User, Entry } from './reducer';

export enum ActionTypes {
    SetValue = 'SetValue',
    SetUser = 'SetUser',
    SetEntries = 'SetEntries',
}

export type SetValuePayload = Number;

export type SetUserPayload = User;

export type SetEntriesPayload = Entry[];

export interface Action {
    type: ActionTypes;
    payload:
        | SetValuePayload
        | SetUserPayload
        | SetEntriesPayload
        | Object
}
