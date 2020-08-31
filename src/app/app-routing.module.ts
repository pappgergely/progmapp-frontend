import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {StudentRegistrationComponent} from './components/student-registration/student-registration.component';
import {StaffRegistrationComponent} from './components/staff-registration/staff-registration.component';
import {StudentQuizPageComponent} from './components/student-quiz-page/student-quiz-page.component';
import {TeacherQuizPageComponent} from './components/teacher-quiz-page/teacher-quiz-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginPageComponent},
  {path: 'student-registration', component: StudentRegistrationComponent},
  {path: 'staff-registration', component: StaffRegistrationComponent},
  {path: 'student-quiz-page', component: StudentQuizPageComponent},
  {path: 'teacher-quiz-page', component: TeacherQuizPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
