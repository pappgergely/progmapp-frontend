import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../interfaces/user';
import {UsersResponse} from '../interfaces/users-response';
import {Registration} from '../interfaces/registration';
import {ChangePassword} from '../interfaces/change-password';
import {ChangePasswordResponse} from '../interfaces/change-password-response';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly SERVER_URL = environment.serverUrl + 'user';
  private readonly SERVER_URL2 = environment.serverUrl;
  private users: BehaviorSubject<User[]>;
  private password: BehaviorSubject<ChangePassword[]>;

  constructor(private http: HttpClient) {
    this.users = new BehaviorSubject([]);
    this.password = new BehaviorSubject([]);
  }

  register(reg: Registration): any{
    return this.http.post(
      this.SERVER_URL2 + 'completeregistration', reg);
  }

  getUsers(): Observable<User[]> {
    const params = new HttpParams({
      fromObject: {
        student: 'false',
      }
    });

    this.http.get<User[]>(this.SERVER_URL + '?' + params,
      {withCredentials: true})
      .subscribe(resp => {
        this.users.next(resp);
      });
    return this.users.asObservable();
  }

  modifyPassword(psw: ChangePassword): Observable<ChangePasswordResponse> {
    return this.http.put<ChangePasswordResponse>(
      this.SERVER_URL2 + 'me',
      { name:  psw.name,
            oldPassword: psw.oldPassword,
            password: psw.password},
      { withCredentials: true })
      .pipe(tap(resp => this.updatePassword(resp)));
  }

  updatePassword(response: ChangePasswordResponse): void {
    if (response.success){
      this.password.next(response.password);
    }
  }

  addUser(e: User): void {
    const user = { ...e, roles: e.roles.map(roleString => ({ name: roleString })) };
    this.http.post<UsersResponse>(
      this.SERVER_URL,
      user,
      { withCredentials: true }
    ).subscribe(resp => this.updateUsers(resp));
  }

  updateUsers(response: UsersResponse): void{
    if (response.success) {
      this.users.next(response.user);
    }
  }
}
