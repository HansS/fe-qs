import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { QuestionsDetailComponent } from './questions-detail/questions-detail.component';
import { QuizzesListComponent } from './quizzes-list/quizzes-list.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuizzesDetailComponent } from './quizzes-detail/quizzes-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionsListComponent,
    QuestionsDetailComponent,
    QuizzesListComponent,
    QuizzesComponent,
    QuizzesDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
