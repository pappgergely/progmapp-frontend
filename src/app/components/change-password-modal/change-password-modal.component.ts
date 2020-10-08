import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {ChangePassword} from '../../interfaces/change-password';

@Component({
  selector: 'app-change-password-modal',
  templateUrl: './change-password-modal.component.html',
  styleUrls: ['./change-password-modal.component.scss']
})
export class ChangePasswordModalComponent implements OnInit {

  password: ChangePassword;
  textShow: boolean;
  passwordForm: FormGroup;
  submitted = false;
  error = '';

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.password = {
      name: '',
      oldPassword: '',
      password: ''
    };
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.passwordForm = this.fb.group({
      name: this.fb.control(this.password.name, Validators.required),
      oldPassword: this.fb.control(this.password.oldPassword, Validators.required),
      password: this.fb.control(this.password.password, Validators.required)
    });
  }

  get f(): any {
    return this.passwordForm.controls;
  }

  onSubmit(): boolean {
    this.submitted = true;
    if (this.passwordForm.invalid) {
      return;
    }

    this.userService.modifyPassword(this.password).subscribe(() => {});
  }
}
