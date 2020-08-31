import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherQuizPageComponent } from './teacher-quiz-page.component';

describe('TeacherQuizPageComponent', () => {
  let component: TeacherQuizPageComponent;
  let fixture: ComponentFixture<TeacherQuizPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherQuizPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherQuizPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
