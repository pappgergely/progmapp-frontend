import {Component, OnInit} from '@angular/core';
import {EternalQuizService} from '../../services/eternal-quiz.service';
import {QuizQuestion} from '../../interfaces/quiz-question';
import {PossibleQuiestionAnswers} from '../../interfaces/possible-quiestion-answers';
import {EternalQuizControllerService, OfficeAdminControllerService, QuestionDTO, UserDTO} from '../../../../build/openapi';

@Component({
  selector: 'app-student-quiz-page',
  templateUrl: './student-quiz-page.component.html',
  styleUrls: ['./student-quiz-page.component.scss']
})
export class StudentQuizPageComponent implements OnInit {

  question: QuestionDTO;

  constructor(private es: EternalQuizControllerService) {
  }

  ngOnInit(): void {
  }

  getNewQuiz(): void {
    this.es.getNextEternalQiuzQuestion().subscribe(
      questionDto => {
        this.question = questionDto;
      }
    );

  }
}
