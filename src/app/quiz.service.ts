import { Injectable } from '@angular/core';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quiz[] = [];

  constructor() { }

  addQuiz(quizKey: Quiz) {
    this.logQuestions(quizKey);
    this.updateQuizList(quizKey);
    this.saveToLocalStorage();
  }

  logQuestions(quiz: Quiz) {
    console.log(quiz.questions);
  }

  updateQuizList(quiz: Quiz) {
    this.quizzes = [...this.quizzes, {...quiz}];
  }

  saveToLocalStorage() {
    localStorage.setItem('quizStorage', JSON.stringify(this.quizzes));
  }
}
