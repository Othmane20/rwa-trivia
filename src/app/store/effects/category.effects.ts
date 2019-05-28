import { Injectable } from "@angular/core";
import { Effect, Actions } from '@ngrx/effects';

import { CategoryActions } from "../actions";
import { CategoryService } from "../../services";
import { Category } from "../../model";

@Injectable()
export class CategoryEffects {

    constructor(
        private actions$: Actions,
        private categoryActions: CategoryActions,
        private categoryService: CategoryService
    ) {}

    @Effect()
    loadCategories$ = this.actions$
        .ofType(CategoryActions.LOAD_CATEGORIES)
        .switchMap(
            () => this.categoryService.getCategories()
            .map((categories: Category[]) => this.categoryActions.loadCategoriesSuccess(categories))
        );

}
