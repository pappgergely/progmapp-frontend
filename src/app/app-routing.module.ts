import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {StudentRegistrationComponent} from './components/student-registration/student-registration.component';
import {StaffRegistrationComponent} from './components/staff-registration/staff-registration.component';
import {StudentQuizPageComponent} from './components/student-quiz-page/student-quiz-page.component';
import {TeacherQuizPageComponent} from './components/teacher-quiz-page/teacher-quiz-page.component';
import {NewUserPageComponent} from './components/new-user-page/new-user-page.component';
import {NewClassPageComponent} from './components/new-class-page/new-class-page.component';
import {TeacherClassPageComponent} from './components/teacher-class-page/teacher-class-page.component';
import {ProfilePageComponent} from './components/profile-page/profile-page.component';
import {NewQuizQuestionModalComponent} from './components/new-quiz-question-modal/new-quiz-question-modal.component';
import {NewForeverquizModalComponent} from './components/new-foreverquiz-modal/new-foreverquiz-modal.component';
import {ChangePasswordModalComponent} from './components/change-password-modal/change-password-modal.component';
import {QuizStatisticModalComponent} from './components/quiz-statistic-modal/quiz-statistic-modal.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginPageComponent},
  {path: 'student-registration', component: StudentRegistrationComponent},
  {path: 'staff-registration', component: StaffRegistrationComponent},
  {path: 'student-quiz-page', component: StudentQuizPageComponent},
  {path: 'teacher-quiz-page', component: TeacherQuizPageComponent},
  {path: 'new-user', component: NewUserPageComponent},
  {path: 'new-class', component: NewClassPageComponent},
  {path: 'teacher-class-page', component: TeacherClassPageComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'new-quiz-question', component: NewQuizQuestionModalComponent},
  {path: 'new-forever-quiz', component: NewForeverquizModalComponent},
  {path: 'change-password', component: ChangePasswordModalComponent},
  {path: 'statistic', component: QuizStatisticModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
