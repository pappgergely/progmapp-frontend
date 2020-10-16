import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTrueFalseCheckboxComponent } from './question-true-false-checkbox.component';

describe('QuestionTrueFalseCheckboxComponent', () => {
  let component: QuestionTrueFalseCheckboxComponent;
  let fixture: ComponentFixture<QuestionTrueFalseCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionTrueFalseCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTrueFalseCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
