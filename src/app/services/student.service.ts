import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {Student} from '../interfaces/student';
import {HttpClient} from '@angular/common/http';
import {StudentResponse} from '../interfaces/student-response';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private readonly SERVER_URL = environment.serverUrl + 'student';
  private student: BehaviorSubject<Student[]>;

  constructor(private http: HttpClient) {
    this.student = new BehaviorSubject([]);
  }

  addStudent(s: Student): void {
    this.http.post<StudentResponse>(
      this.SERVER_URL,
      {student: s},
      { withCredentials: true }
    ).subscribe(resp => this.updateStudent(resp));
  }

  updateStudent(response: StudentResponse): void {
    if (response.success) {
      this.student.next(response.student);
    }
  }
}
