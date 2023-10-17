import { Injectable } from '@angular/core';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
quizzes:Quiz[] = []
  constructor() { }
  addQuiz(quizKey: Quiz) {
    console.log(quizKey.questions)
    this.quizzes.push(quizKey)
    localStorage.setItem('quizStorage', JSON.stringify(this.quizzes))

  }
}
