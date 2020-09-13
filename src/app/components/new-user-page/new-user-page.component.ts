import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NewUserModalComponent} from '../new-user-modal/new-user-modal.component';
import {User} from '../../interfaces/user';
import {UserService} from '../../services/user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-new-user-page',
  templateUrl: './new-user-page.component.html',
  styleUrls: ['./new-user-page.component.scss']
})
export class NewUserPageComponent implements OnInit {

  filter: string;
  users: User[];
  userSubscription: Subscription;

  constructor(private modalService: NgbModal, private userService: UserService) {
    this.users = [];
  }

  ngOnInit(): void {
    this.userSubscription = this.userService.getUsers().subscribe(
      users => {
        this.users = users;
      }
    );
  }

  // ngOnDestroy(): void {
  //   this.userSubscription.unsubscribe();
  // }

  createNewUser(): void {
    this.modalService.open(NewUserModalComponent, { windowClass: 'new-user'});
  }
}
