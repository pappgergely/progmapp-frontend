import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-class-modal',
  templateUrl: './new-class-modal.component.html',
  styleUrls: ['./new-class-modal.component.scss']
})
export class NewClassModalComponent implements OnInit {

  public expanded = false;

  constructor(public activeModal: NgbActiveModal) {
    this.activeModal = activeModal;
  }

  ngOnInit(): void {
  }

  close(): void {
    this.activeModal.close();
  }

  showCheckboxes(): void {
    const checkboxes = document.getElementById('checkboxes');
    if (!this.expanded) {
      checkboxes.style.display = 'block';
      this.expanded = true;
    } else {
      checkboxes.style.display = 'none';
      this.expanded = false;
    }
  }
}
