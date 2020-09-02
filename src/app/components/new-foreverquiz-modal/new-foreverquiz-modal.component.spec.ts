import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewForeverquizModalComponent } from './new-foreverquiz-modal.component';

describe('NewForeverquizModalComponent', () => {
  let component: NewForeverquizModalComponent;
  let fixture: ComponentFixture<NewForeverquizModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewForeverquizModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewForeverquizModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
