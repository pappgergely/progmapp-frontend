import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-foreverquiz-modal',
  templateUrl: './new-foreverquiz-modal.component.html',
  styleUrls: ['./new-foreverquiz-modal.component.scss']
})
export class NewForeverquizModalComponent implements OnInit {

  questions = [
    {id: 1, name: 'kérdés1'},
    {id: 2, name: 'kérdés2'},
  ];

  selectedQuestionIds: number[];

  public expanded = false;

  constructor() { }

  ngOnInit(): void {
  }

  showCheckboxes(): void {
    const checkboxes = document.getElementById('checkboxes');
    if (!this.expanded) {
      checkboxes.style.display = 'block';
      this.expanded = true;
    } else {
      checkboxes.style.display = 'none';
      this.expanded = false;
    }
  }
}
