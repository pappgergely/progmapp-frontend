import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {Student} from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly SERVER_URL = environment.serverUrl + 'me';
  private profile: BehaviorSubject<Student[]>;

  constructor() { }
}
