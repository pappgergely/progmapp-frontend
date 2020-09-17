import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../interfaces/user';
import {UserResponse} from '../interfaces/user-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly SERVER_URL = environment.serverUrl + 'user';
  private users: BehaviorSubject<User[]>;

  constructor(private http: HttpClient) {
    this.users = new BehaviorSubject([]);
  }

  register(user: User): any{
    return this.http.post(this.SERVER_URL + 'completeregistration', user);
  }

  getUsers(): Observable<User[]> {
    const params = new HttpParams({
      fromObject: {
        student: '',
      }
    });

    this.http.get<User[]>(this.SERVER_URL + '?' + params,
      {withCredentials: true})
      .subscribe(resp => {
        this.users.next(resp);
      });
    return this.users.asObservable();
  }

  addUser(e: User): void {
    const user = { ...e, roles: e.roles.map(roleString => ({ name: roleString })) };
    this.http.post<UserResponse>(
      this.SERVER_URL,
      user,
      { withCredentials: true }
    ).subscribe(resp => this.updateUsers(resp));
  }

  updateUsers(response: UserResponse): void{
    if (response.success) {
      this.users.next(response.user);
    }
  }
}
