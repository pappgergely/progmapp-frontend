import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HeaderComponent } from './components/header/header.component';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { StaffRegistrationComponent } from './components/staff-registration/staff-registration.component';
import { StudentQuizPageComponent } from './components/student-quiz-page/student-quiz-page.component';
import { NewQuizQuestionModalComponent } from './components/new-quiz-question-modal/new-quiz-question-modal.component';
import { NewForeverquizModalComponent } from './components/new-foreverquiz-modal/new-foreverquiz-modal.component';
import { NewUserPageComponent } from './components/new-user-page/new-user-page.component';
import { UserRowComponent } from './components/user-row/user-row.component';
import { NewUserModalComponent } from './components/new-user-modal/new-user-modal.component';
import { NewClassPageComponent } from './components/new-class-page/new-class-page.component';
import { ClassRowComponent } from './components/class-row/class-row.component';
import { NewClassModalComponent } from './components/new-class-modal/new-class-modal.component';
import { TeacherClassPageComponent } from './components/teacher-class-page/teacher-class-page.component';
import { ClassQuizRowComponent } from './components/class-quiz-row/class-quiz-row.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { NewStudentModalComponent } from './components/new-student-modal/new-student-modal.component';
import { QuizStatisticModalComponent } from './components/quiz-statistic-modal/quiz-statistic-modal.component';
import { ChangePasswordModalComponent } from './components/change-password-modal/change-password-modal.component';
import { QuizQuestionListPageComponent } from './components/quiz-question-list-page/quiz-question-list-page.component';
import { ForeverQuizListPageComponent } from './components/forever-quiz-list-page/forever-quiz-list-page.component';
import { ForeverQuizRowComponent } from './components/forever-quiz-row/forever-quiz-row.component';
import { QuizQuestionRowComponent } from './components/quiz-question-row/quiz-question-row.component';
import { ModifyForeverquizModalComponent } from './components/modify-foreverquiz-modal/modify-foreverquiz-modal.component';
import { ModifyQuizQuestionModalComponent } from './components/modify-quiz-question-modal/modify-quiz-question-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HeaderComponent,
    StudentRegistrationComponent,
    StaffRegistrationComponent,
    StudentQuizPageComponent,
    NewQuizQuestionModalComponent,
    NewForeverquizModalComponent,
    NewUserPageComponent,
    UserRowComponent,
    NewUserModalComponent,
    NewClassPageComponent,
    ClassRowComponent,
    NewClassModalComponent,
    TeacherClassPageComponent,
    ClassQuizRowComponent,
    ProfilePageComponent,
    NewStudentModalComponent,
    QuizStatisticModalComponent,
    ChangePasswordModalComponent,
    QuizQuestionListPageComponent,
    ForeverQuizListPageComponent,
    ForeverQuizRowComponent,
    QuizQuestionRowComponent,
    ModifyForeverquizModalComponent,
    ModifyQuizQuestionModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    NgSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
