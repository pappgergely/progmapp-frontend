import { Component, OnInit } from '@angular/core';
import {Roles} from '../../enum/roles.enum';
import {OfficeAdminControllerService, UserDTO} from '../../../../build/openapi';

@Component({
  selector: 'app-new-user-modal',
  templateUrl: './new-user-modal.component.html',
  styleUrls: ['./new-user-modal.component.scss']
})
export class NewUserModalComponent implements OnInit {

  roles = [];

  user: UserDTO;
  textShow: boolean;

  constructor(private officeService: OfficeAdminControllerService) {
    this.user = {
      name: '',
      loginName: '',
      emailAddress: '',
      password: '',
      roles: [],
    };
    this.roles = Object.keys(Roles).map(r => ({ id: r, name: r }));
  }

  ngOnInit(): void {
  }

  saveUser(): void {
    console.log('saveUser called');
    this.officeService.createStudent(this.user)
      .subscribe(
        res => {
          this.textShow = true;
        }
      );
  }
}
