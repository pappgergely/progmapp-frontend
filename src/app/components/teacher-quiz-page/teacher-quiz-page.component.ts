import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewQuizQuestionModalComponent } from '../new-quiz-question-modal/new-quiz-question-modal.component';
import {NewForeverquizModalComponent} from '../new-foreverquiz-modal/new-foreverquiz-modal.component';

@Component({
  selector: 'app-teacher-quiz-page',
  templateUrl: './teacher-quiz-page.component.html',
  styleUrls: ['./teacher-quiz-page.component.scss']
})
export class TeacherQuizPageComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  getNewQuizQuestion(): void {
    this.modalService.open(NewQuizQuestionModalComponent, { windowClass: 'quiz-question'});
  }

  getNewForeverQuiz(): void {
    this.modalService.open(NewForeverquizModalComponent, { windowClass: 'quiz-question'});
  }
}
