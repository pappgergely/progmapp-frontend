import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../interfaces/user';

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

  user: User;
  textShow: boolean;

  constructor(private userService: UserService) {
    this.user = {
      name: '',
      loginName: '',
      emailAddress: '',
      password: '',
      roles: [],
    };
  }

  ngOnInit(): void {
  }

  saveUser(): void {
    this.userService.addUser(this.user);
    this.textShow = true;
    window.scroll(0, 0);
  }
}
