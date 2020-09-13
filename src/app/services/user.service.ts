import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../interfaces/user';
import {UserResponse} from '../interfaces/user-response';
import {UsersResponse} from '../interfaces/users-response';
import {NewClass} from '../interfaces/new-class';
import {NewClassResponse} from '../interfaces/new-class-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly SERVER_URL = environment.serverUrl;
  private users: BehaviorSubject<User[]>;

  constructor(private http: HttpClient) {
    this.users = new BehaviorSubject([]);
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

    this.http.get<UsersResponse>(this.SERVER_URL + 'user?' + params,
      {withCredentials: true})
      .subscribe(resp => {
        this.updateUsers(resp);
      });
    return this.users;
  }

  updateUsers(response: UsersResponse): void{
    if (response.success) {
      this.users.next(response.users);
    }
  }
}
