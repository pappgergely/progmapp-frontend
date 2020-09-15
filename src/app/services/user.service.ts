import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {User} from '../interfaces/user';
import {UserResponse} from '../interfaces/user-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly SERVER_URL = environment.serverUrl + 'user';
  private user: BehaviorSubject<User[]>;

  constructor(private http: HttpClient) {
    this.user = new BehaviorSubject([]);
  }

  register(user: User): any{
    return this.http.post(this.SERVER_URL + 'completeregistration', user);
  }

  getUsers(): BehaviorSubject<User[]> {
    const params = new HttpParams({
      fromObject: {
        student: 'false',
      }
    });

    this.http.get<UserResponse>(this.SERVER_URL + '?' + params,
      {withCredentials: true})
      .subscribe(resp => {
        this.updateUsers(resp);
      });
    return this.user;
  }

  addUser(e: User): void {
    this.http.post<UserResponse>(
      this.SERVER_URL,
      {user: e},
      { withCredentials: true }
    ).subscribe(resp => this.updateUsers(resp));
  }

  updateUsers(response: UserResponse): void{
    if (response.success) {
      this.user.next(response.user);
    }
  }
}
