import { Component, OnInit } from '@angular/core';
import {Student} from '../../interfaces/student';
import {StudentService} from '../../services/student.service';
import {ClassService} from '../../services/class.service';
import {User} from '../../interfaces/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-new-student-modal',
  templateUrl: './new-student-modal.component.html',
  styleUrls: ['./new-student-modal.component.scss']
})
export class NewStudentModalComponent implements OnInit {

  student: Student;
  textShow: boolean;
  students: Student[];

  public expanded = false;

  constructor(private studentService: StudentService, private classService: ClassService, private userService: UserService) {
    this.student = {
      name: '',
      loginName: '',
      emailAddress: '',
      password: '',
      roles: [],
      classes: []
    };
  }

  ngOnInit(): void {
    this.userService.getStudents().subscribe(resp => this.students = resp);
  }

  saveStudent(): void {
    this.studentService.addStudent(this.student);
    this.textShow = true;
  }

  addStudentToClass(): void {
    this.classService.assignStudent(this.student);
  }
}
