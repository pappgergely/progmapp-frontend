import {Component, OnInit} from '@angular/core';
import {QuizQuestion} from '../../interfaces/quiz-question';
import {QuizQuestionService} from '../../services/quiz-question.service';
import {Observable} from 'rxjs';
import {User} from '../../interfaces/user';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-quiz-question-list-page',
  templateUrl: './quiz-question-list-page.component.html',
  styleUrls: ['./quiz-question-list-page.component.scss']
})

export class QuizQuestionListPageComponent implements OnInit {

  filter: string;
  question: QuizQuestion;

  constructor(private quizQuestionService: QuizQuestionService) {
    this.question = {
      id: '',
      text: '',
      explanationAfter: '',
      feedbackType: '',
      possibleAnswers: []
    };
  }

  ngOnInit(): void {
    this.quizQuestionService.getQuizQuestion().subscribe(
      question => { this.question = question.quizQuestion;
      }
    );
  }
}
