import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Category } from "../../model";
import { NewAction } from "../new-action";

@Injectable()
export class CategoryActions {

    static LOAD_CATEGORIES = 'LOAD_CATEGORIES';
    static LOAD_CATEGORIES_SUCCESS = 'LOAD_CATEGORIES_SUCCESS';

    loadCategories(): Action {
        return {
            type: CategoryActions.LOAD_CATEGORIES
        };
    }

    loadCategoriesSuccess(categories: Category[]): NewAction<Category[]> {
        return {
            type: CategoryActions.LOAD_CATEGORIES_SUCCESS,
            payload: categories
        };
    }

}
