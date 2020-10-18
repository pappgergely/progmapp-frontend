import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDropdownComponent } from './question-dropdown.component';

describe('QuestionDropdownComponent', () => {
  let component: QuestionDropdownComponent;
  let fixture: ComponentFixture<QuestionDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
