import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { QuizDisplayComponent } from './quiz-display/quiz-display.component';
import { QuestionComponent } from './question/question.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ScoreComponent } from './score/score.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'question', component: QuestionComponent  },
  { path: 'quiz-display', component: QuizDisplayComponent  },
  { path: 'sign-up', component: SignUpComponent  },
  { path: 'score', component: ScoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
