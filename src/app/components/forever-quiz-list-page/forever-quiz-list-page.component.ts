import { Component, OnInit } from '@angular/core';
import {NewQuiz} from '../../interfaces/new-quiz';
import {Subscription} from 'rxjs';
import {NewQuizService} from '../../services/new-quiz.service';

@Component({
  selector: 'app-forever-quiz-list-page',
  templateUrl: './forever-quiz-list-page.component.html',
  styleUrls: ['./forever-quiz-list-page.component.scss']
})
export class ForeverQuizListPageComponent implements OnInit {

  quiz: NewQuiz[];
  quizSubscription: Subscription;
  filter: string;

  constructor(private quizService: NewQuizService) {
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
