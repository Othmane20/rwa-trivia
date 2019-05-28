import { Action } from "@ngrx/store";

export interface NewAction<T> extends Action {

    type: string;
    payload: T;

}