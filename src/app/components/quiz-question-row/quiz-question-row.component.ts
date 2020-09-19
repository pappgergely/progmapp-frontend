import {Component, Input, OnInit} from '@angular/core';
import {QuizQuestion} from '../../interfaces/quiz-question';
import {QuizQuestionService} from '../../services/quiz-question.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: ' [app-quiz-question-row] ',
  templateUrl: './quiz-question-row.component.html',
  styleUrls: ['./quiz-question-row.component.scss']
})
export class QuizQuestionRowComponent implements OnInit {

  question1: QuizQuestion;

  @Input()
  question: QuizQuestion;

  constructor(private quizQuestionService: QuizQuestionService) {
    this.question1 = {
      id: '',
      text: '',
      explanationAfter: '',
      feedbackType: '',
      possibleAnswers: []
    };
  }

  ngOnInit(): void {
    this.quizQuestionService.getQuizQuestion().subscribe(
      question => { this.question = question;
      }
    );
  }

}
