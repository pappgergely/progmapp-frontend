import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {QuizQuestion} from '../../interfaces/quiz-question';
import {AnswerType} from '../../enum/question-type.enum';
import {QuizQuestionService} from '../../services/quiz-question.service';
import {FeedbackType} from '../../enum/feedback-type.enum';
import {AngularEditorConfig} from '@kolkov/angular-editor';


@Component({
  selector: 'app-question-true-false-checkbox',
  templateUrl: './question-true-false-checkbox.component.html',
  styleUrls: ['./question-true-false-checkbox.component.scss']
})
export class QuestionTrueFalseCheckboxComponent implements OnInit {

  textShow: boolean;
  question: QuizQuestion;
  type: AnswerType;
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
          type: AnswerType.trueFalseCheckbox,
          possibleAnswerValues: [
            {
              text: '',
              isRightAnswer: false
            }
          ]
        }
      ],
    };
  }

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
  };

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
}
