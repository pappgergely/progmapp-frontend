import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-student-modal',
  templateUrl: './new-student-modal.component.html',
  styleUrls: ['./new-student-modal.component.scss']
})
export class NewStudentModalComponent implements OnInit {

  classes = [
    {id: 1, name: 'osztály1'},
    {id: 2, name: 'osztály2'},
  ];

  selectedClassIds: number[];

  public expanded = false;

  constructor() {}

  ngOnInit(): void {
  }
}
