import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClassPageComponent } from './new-class-page.component';

describe('NewClassPageComponent', () => {
  let component: NewClassPageComponent;
  let fixture: ComponentFixture<NewClassPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewClassPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClassPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
