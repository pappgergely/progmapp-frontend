import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownTexteditorComponent } from './markdown-texteditor.component';

describe('MarkdownTexteditorComponent', () => {
  let component: MarkdownTexteditorComponent;
  let fixture: ComponentFixture<MarkdownTexteditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkdownTexteditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownTexteditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
