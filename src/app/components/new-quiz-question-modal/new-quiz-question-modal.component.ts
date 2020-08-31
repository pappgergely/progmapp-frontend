import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-quiz-question-modal',
  templateUrl: './new-quiz-question-modal.component.html',
  styleUrls: ['./new-quiz-question-modal.component.scss']
})
export class NewQuizQuestionModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {
    this.activeModal = activeModal;
  }

  ngOnInit(): void {
  }

  close(): void {
    this.activeModal.close();
  }

  generateNewAnswer(): void {
    const createDiv = document.createElement('div');
    createDiv.innerHTML = `
      <input>
      <input type="checkbox">
      <label>Jó válasz</label>
      <input type="checkbox">
      <label>Rossz válasz</label>`;
    document.getElementsByClassName('answers')[0].appendChild(createDiv);
  }
}
