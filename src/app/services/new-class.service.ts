import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {NewClass} from '../interfaces/new-class';
import {NewClassResponse} from '../interfaces/new-class-response';

@Injectable({
  providedIn: 'root'
})
export class NewClassService {

  private readonly SERVER_URL = environment.serverUrl + 'class';
  private classes: BehaviorSubject<NewClass[]>;

  constructor(private http: HttpClient) { }

  addClass(e: NewClass): void {
    this.http.post<NewClassResponse>(
      this.SERVER_URL,
      e,
      { withCredentials: true }
    ).subscribe(resp => this.updateClasses(resp));
  }

  private updateClasses(response: NewClassResponse): void {
    if (response.success) {
      this.classes.next(response.class);
    }
  }
}
