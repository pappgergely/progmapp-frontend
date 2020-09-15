import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {Class} from '../interfaces/class';
import {ClassResponse} from '../interfaces/class-response';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private readonly SERVER_URL = environment.serverUrl + 'class';
  private classes: BehaviorSubject<Class[]>;

  constructor(private http: HttpClient) {
    this.classes = new BehaviorSubject([]);
  }

  addClass(e: Class): void {
    this.http.post<ClassResponse>(
      this.SERVER_URL,
      e,
      { withCredentials: true }
    ).subscribe(() => {});
  }

  getClasses(): Observable<Class[]> {
    const params = new HttpParams({
      fromObject: {
        active: 'true',
      }
    });

    this.http.get<Class[]>(this.SERVER_URL + '?' + params,
      {withCredentials: true})
      .subscribe(resp => {
        this.classes.next(resp);
      });
    return this.classes.asObservable();
  }
}
