import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../interfaces/user';
import {UserResponse} from '../interfaces/user-response';
import {UsersResponse} from '../interfaces/users-response';

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

  // getUsers(): Observable<User[]> {
  //   this.http.get<UsersResponse>(this.SERVER_URL, {withCredentials: true})
  //     .subscribe(resp => this.updateUsers(resp));
  //   return this.users;
  // }
  //
  // getUser(id: number): Observable<UserResponse> {
  //   return this.http.get<UserResponse>(this.SERVER_URL +  '/users/' + id , {withCredentials: true});
  // }
  //
  // updateUsers(response: UsersResponse): void{
  //   if (response.success) {
  //     this.users.next(response.users);
  //   }
  // }
}
