import { Component, Input, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Quiz } from '../quiz';

@Component({
  selector: 'app-quiz-display',
  templateUrl: './quiz-display.component.html',
  styleUrls: ['./quiz-display.component.css']
})
export class QuizDisplayComponent implements OnInit {
  quizzes: Quiz[] = [];

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    // Fetch quizzes from service (or from local storage)
    this.quizzes = this.quizService.quizzes;
    // Or load from local storage
    // this.quizzes = JSON.parse(localStorage.getItem('quizStorage') || '[]');
  }

  clear() {
    this.quizzes = [];
    localStorage.setItem('quizStorage', JSON.stringify(this.quizzes));
  }
}
