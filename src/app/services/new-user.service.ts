import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {NewUser} from '../interfaces/new-user';
import {HttpClient} from '@angular/common/http';
import {NewUserResponse} from '../interfaces/new-user-response';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  private readonly SERVER_URL = environment.serverUrl + 'user';
  private users: BehaviorSubject<NewUser[]>;

  constructor(private http: HttpClient) {
    this.users = new BehaviorSubject([]);
  }

  addUser(e: NewUser): void {
    this.http.post<NewUserResponse>(
      this.SERVER_URL,
      {user: e},
      { withCredentials: true }
    ).subscribe(resp => this.updateUsers(resp));
  }

  private updateUsers(response: NewUserResponse): void {
    if (response.success) {
      this.users.next(response.user);
    }
  }
}
