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
  templateUrl: './student-assign-to-class.component.html',
  styleUrls: ['./student-assign-to-class.component.scss']
})
export class StudentAssignToClassComponent implements OnInit {

  student: Student;
  textShow: boolean;
  classId: string;
  students: Student[];
  class: Class;

  public expanded = false;

  constructor(private studentService: StudentService, private classService: ClassService, private userService: UserService,
              private route: ActivatedRoute, private router: Router) {
    this.student = {
      name: '',
      loginName: '',
      emailAddress: '',
      password: '',
      classes: []
    };
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.classId = params.class;
    });
    this.studentService.getStudents().subscribe(resp => this.students = resp);
  }

  saveStudent(): void {
    this.studentService.addStudent(this.student);
    this.textShow = true;
  }

  addStudentToClass(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.classService.assignStudent(this.student, id).subscribe( () => {
      this.router.navigateByUrl('/staff-class');
    });
  }
}
