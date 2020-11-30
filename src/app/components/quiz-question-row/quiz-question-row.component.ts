import {Component, Host, Input, OnInit} from '@angular/core';
import {QuizQuestionService} from '../../services/quiz-question.service';
import {ModifyQuizQuestionModalComponent} from '../modify-quiz-question-modal/modify-quiz-question-modal.component';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {QuestionDTO, TestControllerService} from '../../../../build/openapi';
import {QuizQuestionListPageComponent} from '../quiz-question-list-page/quiz-question-list-page.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: ' [app-quiz-question-row] ',
  templateUrl: './quiz-question-row.component.html',
  styleUrls: ['./quiz-question-row.component.scss']
})
export class QuizQuestionRowComponent implements OnInit {

  @Input()
  question: QuestionDTO;

  constructor(private testController: TestControllerService, @Host() private parent: QuizQuestionListPageComponent,
              private questionServeice: QuizQuestionService, private modalService: NgbModal) {
  }


  ngOnInit(): void {
  }

  modify(): void {
    const ngbModalOptions: NgbModalOptions = {
      backdrop : 'static',
      keyboard : false
    };
    const modalRef = this.modalService.open(ModifyQuizQuestionModalComponent, ngbModalOptions);
    modalRef.componentInstance.question = this.question;
  }

  showQuestion(): void {
    this.testController.findQuestion(this.question.id).subscribe(
      value => {
        this.parent.showQuestionPopup(value);
      },
      error => {

      }
    );
  }
}
