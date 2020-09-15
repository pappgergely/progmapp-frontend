import {Component, Input, OnInit} from '@angular/core';
import {SearchEternalQuiz} from '../../interfaces/search-eternal-quiz';

@Component({
  selector: 'tr[ app-class-quiz-row ]',
  templateUrl: './class-quiz-row.component.html',
  styleUrls: ['./class-quiz-row.component.scss']
})
export class ClassQuizRowComponent implements OnInit {

  @Input()
  quizWithClass: SearchEternalQuiz;

  //  TODO foreverquiz add to the class method

  constructor() { }

  ngOnInit(): void {
  }

}
