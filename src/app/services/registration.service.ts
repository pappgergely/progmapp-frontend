import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private csrfToken: string;
  private readonly SERVER_URL = environment.serverUrl;

  constructor(private http: HttpClient) {
    this.csrfToken = '';
    this.fetchCsrf().subscribe(() => {});
  }

  getCsrf(): string {
    return this.csrfToken;
  }

  fetchCsrf(): Observable<string> {
    return this.http.get<string>(this.SERVER_URL +  'csrf', { responseType: 'text' as 'json', withCredentials: true })
      .pipe(tap( csrf => {
        this.csrfToken = csrf;
      } ));
  }
}
