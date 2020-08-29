import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {StudentRegistrationComponent} from './components/student-registration/student-registration.component';
import {StaffRegistrationComponent} from './components/staff-registration/staff-registration.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginPageComponent},
  {path: 'student-registration', component: StudentRegistrationComponent},
  {path: 'staff-registration', component: StaffRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
