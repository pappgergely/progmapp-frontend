import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxListQuestionComponent } from './checkbox-list-question.component';

describe('CheckboxListQuestionComponent', () => {
  let component: CheckboxListQuestionComponent;
  let fixture: ComponentFixture<CheckboxListQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxListQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxListQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
