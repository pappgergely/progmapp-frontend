import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modify-foreverquiz-modal',
  templateUrl: './modify-foreverquiz-modal.component.html',
  styleUrls: ['./modify-foreverquiz-modal.component.scss']
})
export class ModifyForeverquizModalComponent implements OnInit {

  questions = [
    {id: 1, name: 'kérdés1'},
    {id: 2, name: 'kérdés2'},
  ];

  selectedQuestionIds: number[];

  constructor() { }

  ngOnInit(): void {
  }

}
