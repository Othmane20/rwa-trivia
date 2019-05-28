import '../../rxjs-extensions';

import { Category } from "../../model";
import { CategoryActions } from "../actions";
import { NewAction } from "../new-action";

export const categories = (state: any = [], action: NewAction<Category[]>): Category[] => {
    switch (action.type) {
        case CategoryActions.LOAD_CATEGORIES_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};
