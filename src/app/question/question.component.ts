import { Component, EventEmitter, Output } from '@angular/core';
import { Question } from '../question';
import { Quiz } from '../quiz';
import { QuizService } from '../quiz.service';




@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  questions: any[] = JSON.parse(localStorage.getItem('qStorage') || '[]');
  questionCreated = false;
  newQuestion: Question = new Question()
  qCount = 0

  constructor (private quizService: QuizService) {
  }



  submitQuestion() {
      this.questions.push({...this.newQuestion})
      localStorage.setItem('qStorage', JSON.stringify(this.questions))

      this.newQuestion = new Question()
      this.qCount++;

  }

  quizName: string = '';

  submitQuiz() {
    this.quizService.addQuiz(new Quiz(this.quizName, this.questions))
    console.log(this.quizName)
  }


  clear() {
    this.questions = [];
    localStorage.setItem('qStorage', JSON.stringify(this.questions))
    this.qCount = 0;
  }
}

