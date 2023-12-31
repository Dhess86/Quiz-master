import { Component, } from '@angular/core';
import { Question } from '../question.model';
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
  quizName: string = '';

  constructor (private quizService: QuizService) {
  }

  submitQuestion() {
      this.questions.push({...this.newQuestion})

      this.newQuestion = new Question()
      this.qCount++;

  }


  submitQuiz() {
    this.quizService.addQuiz(new Quiz(this.quizName, this.questions))
    this.questions = [];
    this.qCount = 0;
    this.quizName=""

  }


    clear() {
      this.questions = [];
    this.qCount = 0;
      }
    }
