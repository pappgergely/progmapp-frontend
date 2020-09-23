import { Component, OnInit } from '@angular/core';
import {EternalQuizService} from '../../services/eternal-quiz.service';
import {QuizQuestion} from '../../interfaces/quiz-question';
import {PossibleQuestionAnswers} from '../../interfaces/possible-question-answers';

@Component({
  selector: 'app-student-quiz-page',
  templateUrl: './student-quiz-page.component.html',
  styleUrls: ['./student-quiz-page.component.scss']
})
export class StudentQuizPageComponent implements OnInit {

  newQuiestion: QuizQuestion;

  constructor(private eternalQuizService: EternalQuizService) {
    this.newQuiestion = {
      id: '',
      text: '',
      explanationAfter: '',
      feedbackType: '',
      possibleAnswers: []
    };
  }

  ngOnInit(): void {
  }

  getNewQuiz(): void {
    this.eternalQuizService.getStudentQuiz();
  }
}
