import { Component, OnInit } from '@angular/core';
import {Eternalquiz} from '../../interfaces/eternalquiz';
import {Subscription} from 'rxjs';
import {EternalQuizService} from '../../services/eternal-quiz.service';

@Component({
  selector: 'app-forever-quiz-list-page',
  templateUrl: './eternal-quiz-list-page.component.html',
  styleUrls: ['./eternal-quiz-list-page.component.scss']
})
export class EternalQuizListPageComponent implements OnInit {

  quiz: Eternalquiz[];
  quizSubscription: Subscription;
  filter: string;

  constructor(private quizService: EternalQuizService) {
    this.quiz = [];
  }

  ngOnInit(): void {
    this.quizSubscription = this.quizService.getQuiz().subscribe(
      quiz => {
        this.quiz = quiz;
      }
    );
  }
}
