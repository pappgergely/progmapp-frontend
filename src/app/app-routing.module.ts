import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {StudentRegistrationComponent} from './components/student-registration/student-registration.component';
import {StaffRegistrationComponent} from './components/staff-registration/staff-registration.component';
import {StudentQuizPageComponent} from './components/student-quiz-page/student-quiz-page.component';
import {TeacherQuizPageComponent} from './components/teacher-quiz-page/teacher-quiz-page.component';
import {TeacherMainPageComponent} from './components/teacher-main-page/teacher-main-page.component';
import {StaffMainPageComponent} from './components/staff-main-page/staff-main-page.component';
import {NewUserPageComponent} from './components/new-user-page/new-user-page.component';
import {NewClassPageComponent} from './components/new-class-page/new-class-page.component';
import {TeacherClassPageComponent} from './components/teacher-class-page/teacher-class-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginPageComponent},
  {path: 'student-registration', component: StudentRegistrationComponent},
  {path: 'staff-registration', component: StaffRegistrationComponent},
  {path: 'student-quiz-page', component: StudentQuizPageComponent},
  {path: 'teacher-quiz-page', component: TeacherQuizPageComponent},
  {path: 'teacher-main-page', component: TeacherMainPageComponent},
  {path: 'staff-main-page', component: StaffMainPageComponent},
  {path: 'new-user', component: NewUserPageComponent},
  {path: 'new-class', component: NewClassPageComponent},
  {path: 'teacher-class-page', component: TeacherClassPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
