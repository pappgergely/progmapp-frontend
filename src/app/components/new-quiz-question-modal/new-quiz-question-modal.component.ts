import {Component, OnInit} from '@angular/core';
import {QuizQuestion} from '../../interfaces/quiz-question';
import {FeedbackType} from '../../enum/feedback-type.enum';
import {AnswerType} from '../../enum/question-type.enum';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-new-quiz-question-modal',
  templateUrl: './new-quiz-question-modal.component.html',
  styleUrls: ['./new-quiz-question-modal.component.scss']
})
export class NewQuizQuestionModalComponent implements OnInit {

  question: QuizQuestion;
  public environment = environment;

  constructor() {
    this.question = {
      id: null,
      createdAt: null,
      updatedAt: null,
      createdBy: '',
      lastModifiedBy: '',
      text: '',
      adminDescription: '',
      explanationAfter: '',
      answerTimeInSec: null,
      evaluationAlogrithm: '',
      feedbackType: FeedbackType.default,
      hasImage: null,
      possibleAnswers: [
        {
          id: '',
          createdAt: null,
          updatedAt: null,
          createdBy: '',
          lastModifiedBy: '',
          textBefore: '',
          textAfter: '',
          type: AnswerType.default,
          hasImage: null,
          order: '',
          unitTestCode: '',
          possibleAnswerValues: [
            {
              id: '',
              createdAt: null,
              updatedAt: null,
              createdBy: '',
              lastModifiedBy: '',
              text: '',
              isRightAnswer: true,
              rightOrder: null,
            }
          ]
        }
      ],
    };
  }

  ngOnInit(): void {
  }

  addNewPossibleAnswer(): void {
    this.question.possibleAnswers[0].possibleAnswerValues.push({ text: '', isRightAnswer: false });
  }
}
