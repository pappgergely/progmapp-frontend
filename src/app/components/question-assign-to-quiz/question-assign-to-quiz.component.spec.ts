import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAssignToQuizComponent } from './question-assign-to-quiz.component';

describe('QuestionAssignToQuizComponent', () => {
  let component: QuestionAssignToQuizComponent;
  let fixture: ComponentFixture<QuestionAssignToQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionAssignToQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAssignToQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
