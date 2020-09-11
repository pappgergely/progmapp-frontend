import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { User } from '../interfaces/user';
import {UserResponse} from '../interfaces/user-response';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly SERVER_URL = environment.serverUrl;

  private loggedIn = new BehaviorSubject<boolean>(false);
  public currentUser = new BehaviorSubject<User>(null);
  private csrfToken: string;

  constructor(private http: HttpClient, private router: Router) {
    // this.getCurrentUser();
    this.csrfToken = '';
    this.fetchCsrf().subscribe(x => {
      console.log(x);
    });
  }

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  // getCurrentUser(): void{
  //   this.http.get<UserResponse>(
  //     this.SERVER_URL,
  //     {withCredentials: true}
  //   ).subscribe(resp => this.setLoggedIn(resp.success, resp.user) );
  // }

  getCsrf(): string {
    return this.csrfToken;
  }

  fetchCsrf(): Observable<string> {
    return this.http.get<string>(this.SERVER_URL +  'csrf', { responseType: 'text' as 'json', withCredentials: true })
      .pipe(tap( csrf => {
        this.csrfToken = csrf;
      } ));
  }

  setLoggedIn(loggedIn: boolean, currentUser: User): void {
    this.loggedIn.next(loggedIn);
    this.currentUser.next(currentUser);
  }

  logIn(username: string, password: string): Observable<object> {
    const fd = new FormData();
    fd.append('username', username);
    fd.append('password', password);
    this.fetchCsrf();
    return this.http.post<object>(
      this.SERVER_URL + 'login',
      fd,
      { withCredentials: true },
    ).pipe(tap( () => this.fetchCsrf().subscribe(() => {}) ));
  }

  logout(): void {
    this.loggedIn.next(false);
    this.router.navigateByUrl('login');
  }
}
