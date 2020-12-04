import { Component, OnInit } from '@angular/core';
import {QuizQuestion} from '../../interfaces/quiz-question';
import {AnswerType} from '../../enum/question-type.enum';
import {QuizQuestionService} from '../../services/quiz-question.service';
import {FeedbackType} from '../../enum/feedback-type.enum';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-question-dropdown',
  templateUrl: './question-dropdown.component.html',
  styleUrls: ['./question-dropdown.component.scss']
})
export class QuestionDropdownComponent implements OnInit {

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

  options = {
    placeholderText: 'Kérdés szövege...',
    charCounterCount: false,
    attribution: false,
    language: 'hu',
  };

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
