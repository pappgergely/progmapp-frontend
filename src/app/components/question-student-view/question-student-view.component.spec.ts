import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionStudentViewComponent } from './question-student-view.component';

describe('QuestionStudentViewComponent', () => {
  let component: QuestionStudentViewComponent;
  let fixture: ComponentFixture<QuestionStudentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionStudentViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionStudentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
