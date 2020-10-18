import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionOrdercodeComponent } from './question-ordercode.component';

describe('QuestionOrdercodeComponent', () => {
  let component: QuestionOrdercodeComponent;
  let fixture: ComponentFixture<QuestionOrdercodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionOrdercodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionOrdercodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
