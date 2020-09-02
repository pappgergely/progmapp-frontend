import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HeaderComponent } from './components/header/header.component';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { StaffRegistrationComponent } from './components/staff-registration/staff-registration.component';
import { StudentQuizPageComponent } from './components/student-quiz-page/student-quiz-page.component';
import { TeacherQuizPageComponent } from './components/teacher-quiz-page/teacher-quiz-page.component';
import { NewQuizQuestionModalComponent } from './components/new-quiz-question-modal/new-quiz-question-modal.component';
import { NewForeverquizModalComponent } from './components/new-foreverquiz-modal/new-foreverquiz-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HeaderComponent,
    StudentRegistrationComponent,
    StaffRegistrationComponent,
    StudentQuizPageComponent,
    TeacherQuizPageComponent,
    NewQuizQuestionModalComponent,
    NewForeverquizModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  entryComponents: [
    NewQuizQuestionModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
