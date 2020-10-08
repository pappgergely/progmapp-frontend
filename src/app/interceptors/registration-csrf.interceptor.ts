import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {RegistrationService} from '../services/registration.service';

@Injectable()
export class RegistrationCsrfInterceptor implements HttpInterceptor {

  private registrationService: RegistrationService;

  constructor(private injector: Injector) {
    setTimeout(() => {
      this.registrationService = this.injector.get(RegistrationService);
    }, 1);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.registrationService) {
      if (request.method !== 'GET' && this.registrationService.getCsrf() !== '') {
        const newHeaders = request.headers.set('X-CSRF-TOKEN', this.registrationService.getCsrf());
        request = request.clone({headers: newHeaders});
      }
    }
    request = request.clone({withCredentials: true});
    return next.handle(request);
  }
}
