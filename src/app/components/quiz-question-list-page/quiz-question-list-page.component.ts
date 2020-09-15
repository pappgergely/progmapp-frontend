import {Component, Input, OnInit} from '@angular/core';
import {QuizQuestion} from '../../interfaces/quiz-question';
import {Subscription} from 'rxjs';
import {QuizQuestionService} from '../../services/quiz-question.service';

@Component({
  selector: 'app-quiz-question-list-page',
  templateUrl: './quiz-question-list-page.component.html',
  styleUrls: ['./quiz-question-list-page.component.scss']
})
export class QuizQuestionListPageComponent implements OnInit {

  filter: string;
  questions: QuizQuestion[];
  quizQuestionSubscription: Subscription;

  constructor(private quizQuestionService: QuizQuestionService) {
    this.questions = [];
  }

  ngOnInit(): void {
    this.quizQuestionSubscription = this.quizQuestionService.getQuizQuestion().subscribe(
      question => {
        this.questions = question;
      }
    );
  }

}
