import { Component, OnInit } from '@angular/core';
import {Student} from '../../interfaces/student';
import {StudentService} from '../../services/student.service';
import {ClassService} from '../../services/class.service';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Class} from '../../interfaces/class';
import {Semester} from '../../enum/semester.enum';

@Component({
  selector: 'app-new-student-modal',
  templateUrl: './new-student-modal.component.html',
  styleUrls: ['./new-student-modal.component.scss']
})
export class NewStudentModalComponent implements OnInit {

  student: Student;
  textShow: boolean;
  classId: string;
  students: Student[];

  public expanded = false;

  constructor(private studentService: StudentService, private classService: ClassService, private userService: UserService,
              private route: ActivatedRoute, private router: Router) {
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
    this.route.params.subscribe(params => {
      this.classId = params.class;
    });
    this.userService.getStudents().subscribe(resp => this.students = resp);
  }

  saveStudent(): void {
    this.studentService.addStudent(this.student);
    this.textShow = true;
  }

  addStudentToClass(): void {
    this.classService.assignStudent(this.student).subscribe( () => {
      this.router.navigateByUrl('/staff-class');
    });
  }
}
