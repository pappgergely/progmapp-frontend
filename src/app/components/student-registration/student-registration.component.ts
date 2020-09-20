import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {MustMatch} from '../_password-validator/must-match.validator';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss']
})
export class StudentRegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  loading = false;
  registrationSuccess = false;
  error: '';

  constructor(private formBuilder: FormBuilder, private userService: UserService, public router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      token: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  get f(): any { return this.registerForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;

    this.userService
      .register(this.registerForm.value)
      .pipe(first())
      .subscribe(data => { this.registrationSuccess = true; },
        error => { alert(error); });

    if (this.registrationSuccess === true) {
      this.router.navigateByUrl('/login');
    }
  }
}
