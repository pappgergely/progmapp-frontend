import {Component, Host, Input, OnInit} from '@angular/core';
import {QuizQuestion} from '../../interfaces/quiz-question';
import {TestControllerService} from '../../../../build/openapi';
import {QuizQuestionListPageComponent} from '../quiz-question-list-page/quiz-question-list-page.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: ' [app-quiz-question-row] ',
  templateUrl: './quiz-question-row.component.html',
  styleUrls: ['./quiz-question-row.component.scss']
})
export class QuizQuestionRowComponent implements OnInit {

  @Input()
  question: QuizQuestion;

  constructor(private testController: TestControllerService, @Host() private parent: QuizQuestionListPageComponent) {
  }

  ngOnInit(): void {
  }

  showQuestion(): void {
    this.testController.findQuestion(this.question.id).subscribe(
      value => {
        this.parent.showQuestionPopup(value);
      },
      error => {

      }
    )
  }
}
