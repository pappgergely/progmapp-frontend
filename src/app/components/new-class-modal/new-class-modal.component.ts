import { Component, OnInit } from '@angular/core';
import {NewClass} from '../../interfaces/new-class';
import {NewClassService} from '../../services/new-class.service';

@Component({
  selector: 'app-new-class-modal',
  templateUrl: './new-class-modal.component.html',
  styleUrls: ['./new-class-modal.component.scss']
})
export class NewClassModalComponent implements OnInit {

  class: NewClass;
  textShow: boolean;

  constructor(private newClassService: NewClassService) {
    this.class = {
      id: '',
      year: null,
      semester: '',
      isActive: false,
    };
  }

  ngOnInit(): void {
  }

  saveClass(): void {
    this.newClassService.addClass(this.class);
    this.textShow = true;
    window.scroll(0, 0);
  }
}
