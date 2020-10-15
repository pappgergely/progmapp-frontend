import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Registration} from '../../interfaces/registration';
import {RegistrationService} from '../../services/registration.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  registrationSuccess = false;
  error: '';
  regData: Registration;

  constructor(private fb: FormBuilder, private userService: UserService, public router: Router,
              private registrationService: RegistrationService) {
    this.regData = {
      token: '',
      password: '',
      birthDate: '',
    };
  }

  ngOnInit(): void {
    this.createRegisterForm();
    this.registrationService.getCsrf();
  }

  createRegisterForm(): void {
    this.registerForm = this.fb.group({
      token: this.fb.control(this.regData.token, Validators.required),
      password: this.fb.control(this.regData.password, Validators.required),
      birthDate: this.fb.control(this.regData.birthDate, Validators.required)
    });
  }

  get f(): any { return this.registerForm.controls; }

  onSubmit(): boolean {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    if (this.registerForm.valid) {
      this.userService
        .register(this.registerForm.value)
        .pipe(first())
        .subscribe(data => { this.registrationSuccess = true; this.router.navigateByUrl('/login'); },
          error => { alert(error); });
    } else {
      return false;
    }
  }
}
