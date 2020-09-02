import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-user-modal',
  templateUrl: './new-user-modal.component.html',
  styleUrls: ['./new-user-modal.component.scss']
})
export class NewUserModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {
    this.activeModal = activeModal;
  }

  ngOnInit(): void {
  }

  close(): void {
    this.activeModal.close();
  }

  generateAnotherRole(): void {
    const createDiv = document.createElement('div');
    createDiv.innerHTML = `
      <select class="form-control" id="inputUserRole">
        <option selected disabled>Válassz...</option>
        <option>Admin</option>
        <option>Irodai munkatárs</option>
        <option>Tanár</option>
        <option>Mentor</option>
        <option>Diák</option>
      </select>`;
    document.getElementsByClassName('role')[0].appendChild(createDiv);
  }
}
