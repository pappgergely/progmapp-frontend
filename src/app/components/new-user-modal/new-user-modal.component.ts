import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {NewUser} from '../../interfaces/new-user';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
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

  selectedRoleIds: number[];

  user: NewUser;
  private readonly SERVER_URL = environment.serverUrl;

  constructor(public activeModal: NgbActiveModal, private http: HttpClient, private newUserService: NewUserService) {
    this.activeModal = activeModal;
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

  close(): void {
    this.activeModal.close();
  }

  saveUser(): void {
    this.newUserService.addUser(this.user);
    this.activeModal.close();
  }
}
