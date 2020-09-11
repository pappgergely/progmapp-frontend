import {Component, OnInit} from '@angular/core';
import {User} from '../../interfaces/user';
import {LoginService} from '../../services/login.service';
import {Roles} from '../../enum/roles.enum';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: User;

  constructor(private router: Router, private loginService: LoginService) {
    this.loginService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
  }

  get isAdmin(): any {
    return this.currentUser && this.currentUser.role === Roles.admin;
  }

  get isOffice(): any {
    return this.currentUser && this.currentUser.role === Roles.office;
  }

  get isTeacher(): any {
    return this.currentUser && this.currentUser.role === Roles.teacher;
  }

  get isStudent(): any {
    return this.currentUser && this.currentUser.role === Roles.student;
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['login']);
  }
}
