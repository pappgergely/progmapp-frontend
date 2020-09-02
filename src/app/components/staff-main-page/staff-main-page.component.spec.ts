import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMainPageComponent } from './staff-main-page.component';

describe('StaffMainPageComponent', () => {
  let component: StaffMainPageComponent;
  let fixture: ComponentFixture<StaffMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
