import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NewUserModalComponent} from '../new-user-modal/new-user-modal.component';

@Component({
  selector: 'app-new-user-page',
  templateUrl: './new-user-page.component.html',
  styleUrls: ['./new-user-page.component.scss']
})
export class NewUserPageComponent implements OnInit {

  // TODO filter

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  createNewUser(): void {
    this.modalService.open(NewUserModalComponent, { windowClass: 'new-user'});
  }
}
