import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { SlimLoadingBarModule } from "ng2-slim-loading-bar";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { QuestionAddComponent } from "./question-add/question-add.component";
import { QuestionGetComponent } from "./question-get/question-get.component";
import { QuestionEditComponent } from "./question-edit/question-edit.component";
import { AnswerAddComponent } from "./answer-add/answer-add.component";
import { AnswerGetComponent } from "./answer-get/answer-get.component";
import { AnswerEditComponent } from "./answer-edit/answer-edit.component";
import { TagAddComponent } from "./tag-add/tag-add.component";
import { TagGetComponent } from "./tag-get/tag-get.component";
import { TagEditComponent } from "./tag-edit/tag-edit.component";
import { TagSearchComponent } from "./tag-search/tag-search.component";

import { QuestionsService } from "./questions.service";
import { QuestionShowComponent } from "./question-show/question-show.component";
import { AnswerShowComponent } from "./answer-show/answer-show.component";
import { AnswerListComponent } from "./answer-list/answer-list.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { QuestionCarouselComponent } from "./question-carousel/question-carousel.component";
import { HomeComponent } from "./home/home.component";
import { TagListComponent } from "./tag-list/tag-list.component";

@NgModule({
  declarations: [
    AppComponent,
    QuestionAddComponent,
    QuestionGetComponent,
    QuestionEditComponent,
    AnswerAddComponent,
    AnswerGetComponent,
    AnswerEditComponent,
    TagAddComponent,
    TagGetComponent,
    TagEditComponent,
    TagSearchComponent,
    QuestionShowComponent,
    AnswerShowComponent,
    AnswerListComponent,
    QuestionCarouselComponent,
    HomeComponent,
    TagListComponent
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
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
