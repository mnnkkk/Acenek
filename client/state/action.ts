// eslint-disable-next-line import/prefer-default-export
export enum ActionTypes {
    SetValue = 'SetValue'
}

export type SetValuePayload = Number;

export interface Action {
    type: ActionTypes;
    payload:
        | SetValuePayload
        | Object
}
