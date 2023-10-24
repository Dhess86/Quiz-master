import { Component, Input } from '@angular/core';
import { Quiz } from '../quiz';

@Component({
  selector: 'app-quiz-display',
  templateUrl: './quiz-display.component.html',
  styleUrls: ['./quiz-display.component.css']
})
export class QuizDisplayComponent {
quizzes: Quiz[] = []

ngOnChanges() {
  console.log(this.quizzes)
}

constructor(private quizService: QuizService) {
  this.quizzes = this.quizService.quizzes
}

constructor (private quizService: QuizService)
{
  this.quizzes = this.quizService.quizzes
}
clear() {
  this.quizzes = [];

  localStorage.setItem('quizStorage', JSON.stringify(this.quizzes))

  }
}
