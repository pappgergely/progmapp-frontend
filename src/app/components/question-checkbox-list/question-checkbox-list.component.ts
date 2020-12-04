import { Component, OnInit } from '@angular/core';
import {QuizQuestion} from '../../interfaces/quiz-question';
import {FeedbackType} from '../../enum/feedback-type.enum';
import {AnswerType} from '../../enum/question-type.enum';
import {environment} from '../../../environments/environment';
import {QuizQuestionService} from '../../services/quiz-question.service';

@Component({
  selector: 'app-question-checkbox-list',
  templateUrl: './question-checkbox-list.component.html',
  styleUrls: ['./question-checkbox-list.component.scss']
})
export class QuestionCheckboxListComponent implements OnInit {

  textShow: boolean;
  question: QuizQuestion;
  type: AnswerType;
  public environment = environment;
  private imageFormData: FormData;

  constructor(private quizQuestionService: QuizQuestionService) {
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
          id: null,
          createdAt: null,
          updatedAt: null,
          createdBy: '',
          lastModifiedBy: '',
          textBefore: '',
          textAfter: '',
          type: AnswerType.checkboxList,
          hasImage: null,
          order: '',
          unitTestCode: '',
          possibleAnswerValues: [
            {
              id: null,
              createdAt: null,
              updatedAt: null,
              createdBy: '',
              lastModifiedBy: '',
              text: '',
              isRightAnswer: false,
              rightOrder: null,
            }
          ]
        }
      ],
    };
  }

  ngOnInit(): void {
  }

  saveQuizQuestion(): void {
    this.quizQuestionService.addQuizQuestion(this.question, this.imageFormData);
    this.textShow = true;
    window.scroll(0, 0);
  }

  processImage(event): void {
    this.imageFormData = new FormData();
    this.imageFormData.append('file', event.target.files[0]);
  }

  addNewPossibleAnswer(): void {
    this.question.possibleAnswers[0].possibleAnswerValues.push({ text: '', isRightAnswer: false });
  }

  remove(i: number): void {
    this. question.possibleAnswers[0].possibleAnswerValues.splice(i, 1);
  }

}
