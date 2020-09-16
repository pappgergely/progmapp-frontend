import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NewUserModalComponent} from '../new-user-modal/new-user-modal.component';
import {User} from '../../interfaces/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-new-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  filter: string;
  users: User[];

  constructor(private modalService: NgbModal, private userService: UserService) {
    this.users = [];
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      users => { this.users = users;
      }
    );
  }

  createNewUser(): void {
    this.modalService.open(NewUserModalComponent, { windowClass: 'new-user'});
  }
}
