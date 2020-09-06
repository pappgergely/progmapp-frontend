import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeverQuizListPageComponent } from './forever-quiz-list-page.component';

describe('ForeverQuizListPageComponent', () => {
  let component: ForeverQuizListPageComponent;
  let fixture: ComponentFixture<ForeverQuizListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeverQuizListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeverQuizListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
