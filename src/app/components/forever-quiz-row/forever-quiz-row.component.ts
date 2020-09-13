import {Component, Input, OnInit} from '@angular/core';
import {NewQuiz} from '../../interfaces/new-quiz';

@Component({
  selector: 'tr[ app-forever-quiz-row ]',
  templateUrl: './forever-quiz-row.component.html',
  styleUrls: ['./forever-quiz-row.component.scss']
})
export class ForeverQuizRowComponent implements OnInit {

  @Input()
  quiz: NewQuiz;

  constructor() { }

  ngOnInit(): void {
  }

}
