import { Component, OnInit } from '@angular/core';
import {NewUser} from '../../interfaces/new-user';
import {NewUserService} from '../../services/new-user.service';

@Component({
  selector: 'app-new-user-modal',
  templateUrl: './new-user-modal.component.html',
  styleUrls: ['./new-user-modal.component.scss']
})
export class NewUserModalComponent implements OnInit {

  roles = [
    {id: 1, name: 'admin'},
    {id: 2, name: 'irodai munkatárs'},
    {id: 3, name: 'tanár'},
    {id: 4, name: 'diák'},
  ];

  user: NewUser;
  textShow: boolean;

  constructor(private newUserService: NewUserService) {
    this.user = {
      name: '',
      loginName: '',
      emailAddress: '',
      password: '',
      roles: null,
    };
  }

  ngOnInit(): void {
  }

  saveUser(): void {
    this.newUserService.addUser(this.user);
    this.textShow = true;
    window.scroll(0, 0);
  }
}
