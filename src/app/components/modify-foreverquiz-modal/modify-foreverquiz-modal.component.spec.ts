import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyForeverquizModalComponent } from './modify-foreverquiz-modal.component';

describe('ModifyForeverquizModalComponent', () => {
  let component: ModifyForeverquizModalComponent;
  let fixture: ComponentFixture<ModifyForeverquizModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyForeverquizModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyForeverquizModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
