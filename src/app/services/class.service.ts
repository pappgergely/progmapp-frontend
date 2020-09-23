import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Class} from '../interfaces/class';
import {ClassResponse} from '../interfaces/class-response';
import {Student} from '../interfaces/student';
import {StudentService} from './student.service';
import {StudentAssignToClass} from '../interfaces/student-assign-to-class';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private readonly SERVER_URL = environment.serverUrl + 'class';
  private classes: BehaviorSubject<Class[]>;

  constructor(private http: HttpClient, private studentService: StudentService) {
    this.classes = new BehaviorSubject([]);
  }

  addClass(e: Class): void {
    this.http.post<ClassResponse>(
      this.SERVER_URL,
      e,
      { withCredentials: true }
    ).subscribe(resp => this.updateClasses(resp));
  }

  private updateClasses(response: ClassResponse): void {
    if (response.success) {
      this.classes.next(response.class);
    }
  }

  getClasses(): Observable<Class[]> {
    const params = new HttpParams({
      fromObject: {
        active: 'true',
      }
    });

    this.http.get<Class[]>(this.SERVER_URL + '?' + params)
      .subscribe(resp => {
        this.classes.next(resp);
      });
    return this.classes.asObservable();
  }

  assignStudent(s: Student): void {
    // this.http.put<StudentAssignToClass>(
    //   this.SERVER_URL + '/progmatic2020-ősz/students',
    //   s.loginName,
    //   {withCredentials: true})
    //   .subscribe(resp => this.studentService.updateStudent(resp));
  }
}
