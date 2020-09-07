import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-user-modal',
  templateUrl: './new-user-modal.component.html',
  styleUrls: ['./new-user-modal.component.scss']
})
export class NewUserModalComponent implements OnInit {

  roles = [
    {id: 1, name: 'admin'},
    {id: 2, name: 'irodai munkatárs'},
    {id: 3, name: 'tanár'},
    {id: 4, name: 'mentor'},
  ];

  selectedRoleIds: number[];

  constructor(public activeModal: NgbActiveModal) {
    this.activeModal = activeModal;
  }

  ngOnInit(): void {
  }

  close(): void {
    this.activeModal.close();
  }
}
