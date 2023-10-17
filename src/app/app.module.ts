import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { QuizDisplayComponent } from './quiz-display/quiz-display.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    HeaderComponent,
    QuizDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
