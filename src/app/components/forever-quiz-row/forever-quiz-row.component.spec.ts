import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeverQuizRowComponent } from './forever-quiz-row.component';

describe('ForeverQuizRowComponent', () => {
  let component: ForeverQuizRowComponent;
  let fixture: ComponentFixture<ForeverQuizRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeverQuizRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeverQuizRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
