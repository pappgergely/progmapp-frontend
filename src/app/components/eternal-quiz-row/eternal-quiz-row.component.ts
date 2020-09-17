import {Component, Input, OnInit} from '@angular/core';
import {Eternalquiz} from '../../interfaces/eternalquiz';
import {EternalQuizService} from '../../services/eternal-quiz.service';
import {QuizAssignToClass} from '../../interfaces/quiz-assign-to-class';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-forever-quiz-row]',
  templateUrl: './eternal-quiz-row.component.html',
  styleUrls: ['./eternal-quiz-row.component.scss']
})
export class EternalQuizRowComponent implements OnInit {

  @Input()
  quiz: Eternalquiz;

  quizToClass: QuizAssignToClass;

  constructor(private eternalQuizService: EternalQuizService) { }

  ngOnInit(): void {
  }

  addToClass(): void {
    this.eternalQuizService.assignQuizToClass(this.quizToClass);
  }
}
