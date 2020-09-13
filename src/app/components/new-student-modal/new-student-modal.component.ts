import { Component, OnInit } from '@angular/core';
import {Student} from '../../interfaces/student';
import {StudentService} from '../../services/student.service';

@Component({
  selector: 'app-new-student-modal',
  templateUrl: './new-student-modal.component.html',
  styleUrls: ['./new-student-modal.component.scss']
})
export class NewStudentModalComponent implements OnInit {

  classes = [
    {id: 1, name: 'osztály1'},
    {id: 2, name: 'osztály2'},
  ];

  student: Student;
  textShow: boolean;

  selectedClassIds: number[];

  public expanded = false;

  constructor(private studentService: StudentService) {
    this.student = {
      name: '',
      loginName: '',
      emailAddress: '',
      password: '',
    };
  }

  ngOnInit(): void {
  }

  saveStudent(): void {
    this.studentService.addStudent(this.student);
    this.textShow = true;
    window.scroll(0, 0);
  }
}
