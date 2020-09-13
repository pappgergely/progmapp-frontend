import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {StudentRegistrationComponent} from './components/student-registration/student-registration.component';
import {StaffRegistrationComponent} from './components/staff-registration/staff-registration.component';
import {StudentQuizPageComponent} from './components/student-quiz-page/student-quiz-page.component';
import {NewUserPageComponent} from './components/new-user-page/new-user-page.component';
import {NewClassPageComponent} from './components/new-class-page/new-class-page.component';
import {TeacherClassPageComponent} from './components/teacher-class-page/teacher-class-page.component';
import {ProfilePageComponent} from './components/profile-page/profile-page.component';
import {NewQuizQuestionModalComponent} from './components/new-quiz-question-modal/new-quiz-question-modal.component';
import {NewForeverquizModalComponent} from './components/new-foreverquiz-modal/new-foreverquiz-modal.component';
import {ChangePasswordModalComponent} from './components/change-password-modal/change-password-modal.component';
import {QuizStatisticModalComponent} from './components/quiz-statistic-modal/quiz-statistic-modal.component';
import {QuizQuestionListPageComponent} from './components/quiz-question-list-page/quiz-question-list-page.component';
import {ForeverQuizListPageComponent} from './components/forever-quiz-list-page/forever-quiz-list-page.component';
import {Roles} from './enum/roles.enum';
import {AuthGuard} from './guard/auth.guard';
import {MainPageComponent} from './components/main-page/main-page.component';
import {NewClassModalComponent} from './components/new-class-modal/new-class-modal.component';
import {NewStudentModalComponent} from './components/new-student-modal/new-student-modal.component';
import {NewUserModalComponent} from './components/new-user-modal/new-user-modal.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginPageComponent},
  {path: 'main-page', component: MainPageComponent},
  {path: 'student-registration', component: StudentRegistrationComponent},
  {path: 'staff-registration', component: StaffRegistrationComponent},
  {path: 'student-quiz-page', component: StudentQuizPageComponent},
  {path: 'new-user', component: NewUserPageComponent},
  {path: 'new-class', component: NewClassPageComponent},
  {path: 'teacher-class-page', component: TeacherClassPageComponent},
  {path: 'profile', component: ProfilePageComponent}, // TODO role?
  {path: 'new-quiz-question', component: NewQuizQuestionModalComponent},
  {path: 'new-forever-quiz', component: NewForeverquizModalComponent},
  {path: 'change-password', component: ChangePasswordModalComponent}, // TODO role?
  {path: 'statistic', component: QuizStatisticModalComponent}, // TODO role?
  {path: 'quiz-question-list', component: QuizQuestionListPageComponent},
  {path: 'forever-quiz-list', component: ForeverQuizListPageComponent}, // canActivate: [AuthGuard], data: { roles: [Roles.teacher]}
  {path: 'new-class-modal', component: NewClassModalComponent},
  {path: 'new-student-modal', component: NewStudentModalComponent},
  {path: 'new-user-modal', component: NewUserModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
