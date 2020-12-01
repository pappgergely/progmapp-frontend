import {Component, OnInit} from '@angular/core';
import {Class} from '../../interfaces/class';
import {ClassService} from '../../services/class.service';
import {Semester} from '../../enum/semester.enum';
import {ErrorMsgResponse} from '../../interfaces/error-msg-response';
import {ClassResponse} from '../../interfaces/class-response';

@Component({
  selector: 'app-new-class-modal',
  templateUrl: './new-class-modal.component.html',
  styleUrls: ['./new-class-modal.component.scss']
})
export class NewClassModalComponent implements OnInit {

  class: Class;
  classes: Class[];
  textShow: boolean;
  response: ClassResponse;

  constructor(private classService: ClassService) {
    this.class = {
      id: '',
      year: null,
      semester: Semester.spring,
      isActive: true,
    };
    this.classes = [];
  }

  ngOnInit(): void {
  }

  saveClass(): void {
    this.classService.addClass(this.class);
  }

  submit(): void {
    // if (this.classService.errorHandling(this.response.successFullResult[0])) {
    //   this.saveClass();
    // }
    this.saveClass();
  }
}
