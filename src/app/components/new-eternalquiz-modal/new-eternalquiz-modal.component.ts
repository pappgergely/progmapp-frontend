import { Component, OnInit } from '@angular/core';
import {Eternalquiz} from '../../interfaces/eternalquiz';
import {EternalQuizService} from '../../services/eternal-quiz.service';
import {QuestionAssignToQuiz} from '../../interfaces/question-assign-to-quiz';
import {QuizQuestion} from '../../interfaces/quiz-question';
import {PossibleQuiestionAnswers} from '../../interfaces/possible-quiestion-answers';

@Component({
  selector: 'app-new-foreverquiz-modal',
  templateUrl: './new-eternalquiz-modal.component.html',
  styleUrls: ['./new-eternalquiz-modal.component.scss']
})
export class NewEternalquizModalComponent implements OnInit {

  quiz: Eternalquiz;
  textShow: boolean;
  questions: QuizQuestion;
  quizWithQuestions: QuestionAssignToQuiz;

  public expanded = false;

  constructor(private quizService: EternalQuizService) {
    this.quiz = {
      id: '',
      questionIds: '',
    };
    this.questions = {
      id: '',
      text: '',
      explanationAfter: '',
      feedbackType: '',
      possibleAnswers: [],
    };
  }

  ngOnInit(): void {
  }

  saveQuiz(): void {
    this.quizService.addQuiz(this.quiz);
    this.quizService.assignQuestionToQuiz(this.quizWithQuestions);
    this.textShow = true;
  }
}
