import { Component, OnInit } from '@angular/core';
import {QuizQuestion} from '../../interfaces/quiz-question';
import {FeedbackType} from '../../enum/feedback-type.enum';
import {QuestionType} from '../../enum/question-type.enum';
import {environment} from '../../../environments/environment';
import {QuizQuestionService} from '../../services/quiz-question.service';

@Component({
  selector: 'app-checkbox-list-question',
  templateUrl: './checkbox-list-question.component.html',
  styleUrls: ['./checkbox-list-question.component.scss']
})
export class CheckboxListQuestionComponent implements OnInit {

  textShow: boolean;
  question: QuizQuestion;
  type: QuestionType;
  public environment = environment;
  private imageFormData: FormData;

  constructor(private quizQuestionService: QuizQuestionService) {
    this.question = {
      id: null,
      text: '',
      explanationAfter: '',
      feedbackType: FeedbackType.default,
      hasImage: null,
      possibleAnswers: [
        {
          textBefore: '',
          type: QuestionType.checkboxList,
          possibleAnswerValues: [
            {
              text: '',
              isRightAnswer: true
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
    language: 'hu'
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
