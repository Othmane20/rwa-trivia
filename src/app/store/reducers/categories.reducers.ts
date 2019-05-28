import { Action } from "@ngrx/store";
import '../../rxjs-extensions';

import { Category } from "../../model";
import { CategoryActions } from "../actions";

export const categories = (state: any = [], action: Action): Category[] => {
    switch (action.type) {
        case CategoryActions.LOAD_CATEGORIES_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};
