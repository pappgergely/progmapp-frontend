import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CsrfService {

  private readonly SERVER_URL = environment.serverUrl + 'csrf';
  private csrfToken: string;

  constructor(private http: HttpClient) {
    this.csrfToken = '';
    this.fetchCsrf().subscribe(x => {
      console.log(x);
    });
  }

  getCsrf(): string {
    return this.csrfToken;
  }

  fetchCsrf(): Observable<string> {
    return this.http.get<string>(this.SERVER_URL, { responseType: 'text' as 'json', withCredentials: true })
      .pipe(tap( csrf => {
        this.csrfToken = csrf;
      } ));
  }
}
