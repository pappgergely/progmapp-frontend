import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';
import {NewClass} from '../../interfaces/new-class';
import {environment} from '../../../environments/environment';
import {NewClassService} from '../../services/new-class.service';

@Component({
  selector: 'app-new-class-modal',
  templateUrl: './new-class-modal.component.html',
  styleUrls: ['./new-class-modal.component.scss']
})
export class NewClassModalComponent implements OnInit {

  class: NewClass;
  private readonly SERVER_URL = environment.serverUrl;

  constructor(public activeModal: NgbActiveModal, private http: HttpClient, private newClassService: NewClassService) {
    this.activeModal = activeModal;
    this.class = {
      id: '',
      year: null,
      semester: '',
      isActive: false,
    };
  }

  ngOnInit(): void {
  }

  close(): void {
    this.activeModal.close();
  }

  saveClass(): void {
    this.newClassService.addClass(this.class);
    this.activeModal.close();
  }
}
