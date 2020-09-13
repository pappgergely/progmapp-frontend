import {Component, Input, OnInit} from '@angular/core';
import {QuizWithClass} from '../../interfaces/quiz-with-class';

@Component({
  selector: 'tr[ app-class-quiz-row ]',
  templateUrl: './class-quiz-row.component.html',
  styleUrls: ['./class-quiz-row.component.scss']
})
export class ClassQuizRowComponent implements OnInit {

  @Input()
  quizWithClass: QuizWithClass;

  //  TODO foreverquiz add to the class method

  constructor() { }

  ngOnInit(): void {
  }

}
