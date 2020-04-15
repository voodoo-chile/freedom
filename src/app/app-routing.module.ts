import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuestionCarouselComponent } from "./question-carousel/question-carousel.component";
import { QuestionAddComponent } from "./question-add/question-add.component";
import { QuestionShowComponent } from "./question-show/question-show.component";
import { QuestionEditComponent } from "./question-edit/question-edit.component";
import { QuestionGetComponent } from "./question-get/question-get.component";
import { AnswerAddComponent } from "./answer-add/answer-add.component";
import { AnswerEditComponent } from "./answer-edit/answer-edit.component";
import { AnswerGetComponent } from "./answer-get/answer-get.component";
import { HomeComponent } from "./home/home.component";
import { TagAddComponent } from "./tag-add/tag-add.component";
import { TagGetComponent } from "./tag-get/tag-get.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "question/create",
    component: QuestionAddComponent
  },
  { path: "question/:id", component: QuestionShowComponent },
  {
    path: "question/edit/:id",
    component: QuestionEditComponent
  },
  {
    path: "questions",
    component: QuestionGetComponent
  },
  {
    path: "answer/create",
    component: AnswerAddComponent
  },
  {
    path: "answer/edit/:id",
    component: AnswerEditComponent
  },
  {
    path: "answers",
    component: AnswerGetComponent
  },
  {
    path: "tag/create",
    component: TagAddComponent
  },
  {
    path: "tags",
    component: TagGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
