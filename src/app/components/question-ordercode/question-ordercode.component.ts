import { Component, OnInit } from '@angular/core';
import {CodeOrder} from '../../interfaces/code-order';
import {QuizQuestionService} from '../../services/quiz-question.service';

@Component({
  selector: 'app-question-ordercode',
  templateUrl: './question-ordercode.component.html',
  styleUrls: ['./question-ordercode.component.scss']
})
export class QuestionOrdercodeComponent implements OnInit {

  codeOrder: CodeOrder;

  constructor(private quizQuestionService: QuizQuestionService) {
    this.codeOrder = {
      id: null,
      text: '',
      adminDescription: '',
      explanationAfter: '',
      answerTimeInSec: null,
      feedbackType: '',
      code: '',
      unitTest: ''
    };
  }

  ngOnInit(): void {
  }

  saveQuizQuestion(): void {
    this.quizQuestionService.addCodeOrderQuestion(this.codeOrder);
    window.scroll(0, 0);
  }

}
