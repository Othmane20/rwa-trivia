import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';

import { routes } from './app.route';
import { 
  AppComponent, 
  CategoriesComponent,
  QuestionsComponent,
  TagsComponent,
  QuestionAddUpdateComponent
} from './components';
import { CategoryService, QuestionService, TagService } from './services';
import { AppMaterialModule } from './app-material/app-material.module';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    QuestionsComponent,
    TagsComponent,
    QuestionAddUpdateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FlexLayoutModule,
    AppMaterialModule
  ],
  providers: [
    CategoryService,
    QuestionService,
    TagService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
