import { Component, OnInit } from '@angular/core';
import {Class} from '../../interfaces/class';
import {ClassService} from '../../services/class.service';

@Component({
  selector: 'app-new-class-modal',
  templateUrl: './new-class-modal.component.html',
  styleUrls: ['./new-class-modal.component.scss']
})
export class NewClassModalComponent implements OnInit {

  class: Class;
  textShow: boolean;

  constructor(private newClassService: ClassService) {
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
