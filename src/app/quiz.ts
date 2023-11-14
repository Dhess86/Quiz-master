import { Question } from "./question.model";


export class Quiz{
  questions: Question[] = [];
  constructor( public quizName: string, questions: Question[] ) {
    this.questions = questions
  }
}
