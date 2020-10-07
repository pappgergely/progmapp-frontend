import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../interfaces/student';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-student-row]',
  templateUrl: './student-row.component.html',
  styleUrls: ['./student-row.component.scss']
})
export class StudentRowComponent implements OnInit {

  @Input()
  student: Student;

  constructor() { }

  ngOnInit(): void {
  }

}
