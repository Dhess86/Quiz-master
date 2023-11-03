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
  selectedQuiz?: Quiz



  constructor(private quizService: QuizService) {}

  ngOnInit() {
    // Fetch quizzes from service (or from local storage)
    this.quizzes = this.quizService.quizzes;
    // Or load from local storage
  }

  clear(index: number) {
    if (this.quizzes[index]) {
      this.quizzes.splice(index, 1);
      localStorage.setItem('quizStorage', JSON.stringify(this.quizzes));
    }
  }

  showFinishedQuiz(selectedQuiz: Quiz) {
//  display indexed place value
    this.selectedQuiz = selectedQuiz
  }

}
