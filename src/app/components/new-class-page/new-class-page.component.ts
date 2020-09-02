import { Component, OnInit } from '@angular/core';
import {NewClassModalComponent} from '../new-class-modal/new-class-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-class-page',
  templateUrl: './new-class-page.component.html',
  styleUrls: ['./new-class-page.component.scss']
})
export class NewClassPageComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  createNewClass(): void {
    this.modalService.open(NewClassModalComponent, { windowClass: 'new-class'});
  }
}
