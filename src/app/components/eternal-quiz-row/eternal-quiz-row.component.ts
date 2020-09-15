import {Component, Input, OnInit} from '@angular/core';
import {Eternalquiz} from '../../interfaces/eternalquiz';

@Component({
  selector: 'tr[ app-forever-quiz-row ]',
  templateUrl: './eternal-quiz-row.component.html',
  styleUrls: ['./eternal-quiz-row.component.scss']
})
export class EternalQuizRowComponent implements OnInit {

  @Input()
  quiz: Eternalquiz;

  constructor() { }

  ngOnInit(): void {
  }

}
