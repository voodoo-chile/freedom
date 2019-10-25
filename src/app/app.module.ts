import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionAddComponent } from './question-add/question-add.component';
import { QuestionGetComponent } from './question-get/question-get.component';
import { QuestionEditComponent } from './question-edit/question-edit.component';
import { AnswerAddComponent } from './answer-add/answer-add.component';
import { AnswerGetComponent } from './answer-get/answer-get.component';
import { AnswerEditComponent } from './answer-edit/answer-edit.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryGetComponent } from './category-get/category-get.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { TagAddComponent } from './tag-add/tag-add.component';
import { TagGetComponent } from './tag-get/tag-get.component';
import { TagEditComponent } from './tag-edit/tag-edit.component';
import { TagSearchComponent } from './tag-search/tag-search.component';
import { BlurbAddComponent } from './blurb-add/blurb-add.component';
import { BlurbGetComponent } from './blurb-get/blurb-get.component';
import { BlurbEditComponent } from './blurb-edit/blurb-edit.component';

import { QuestionsService } from './questions.service';
import { QuestionShowComponent } from './question-show/question-show.component';
import { AnswerShowComponent } from './answer-show/answer-show.component';
import { AnswerListComponent } from './answer-list/answer-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { QuestionCarouselComponent } from './question-carousel/question-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionAddComponent,
    QuestionGetComponent,
    QuestionEditComponent,
    AnswerAddComponent,
    AnswerGetComponent,
    AnswerEditComponent,
    CategoryAddComponent,
    CategoryGetComponent,
    CategoryEditComponent,
    TagAddComponent,
    TagGetComponent,
    TagEditComponent,
    TagSearchComponent,
    BlurbAddComponent,
    BlurbGetComponent,
    BlurbEditComponent,
    QuestionShowComponent,
    AnswerShowComponent,
    AnswerListComponent,
    QuestionCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SlimLoadingBarModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot()
  ],
  providers: [ QuestionsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
