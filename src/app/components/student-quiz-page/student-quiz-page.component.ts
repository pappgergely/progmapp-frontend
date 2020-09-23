import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {EternalQuizService} from '../../services/eternal-quiz.service';
import {QuizQuestion} from '../../interfaces/quiz-question';
import {PossibleQuiestionAnswers} from '../../interfaces/possible-quiestion-answers';
import {
  AnswerFeedbackDTO,
  AnswerResponseDTO,
  EternalQuizControllerService,
  OfficeAdminControllerService, PossibleAnswerResponseDTO,
  QuestionDTO,
  UserDTO
} from '../../../../build/openapi';
import {PossibleAnswerDropdownComponent} from '../possible-answer-dropdown/possible-answer-dropdown.component';
import {PossibleAnswerResponseProvider} from '../possible-answer-response-provider';
import {EqStatisticsComponent} from '../eq-statistics/eq-statistics.component';

@Component({
  selector: 'app-student-quiz-page',
  templateUrl: './student-quiz-page.component.html',
  styleUrls: ['./student-quiz-page.component.scss']
})
export class StudentQuizPageComponent implements OnInit {

  question: QuestionDTO;
  answerFeedback: AnswerFeedbackDTO;
  errorMessage: string;

  @ViewChildren(PossibleAnswerResponseProvider) responseProviders: QueryList<PossibleAnswerResponseProvider>;

  @ViewChild(EqStatisticsComponent) statisticsComponent: EqStatisticsComponent;

  constructor(private es: EternalQuizControllerService) {
  }

  ngOnInit(): void {
  }

  getNewQuiz(): void {
    this.es.getNextEternalQiuzQuestion().subscribe(
      questionDto => {
        this.question = questionDto;
        this.answerFeedback = null;
      }
    );
  }

  sendAnswer(): void {
    console.log('sendAnswer called');
    console.log('child.length: ' + this.responseProviders.length);
    const anwerRespDto: AnswerResponseDTO = {
      questionId: this.question.id,
      answers: new Array<PossibleAnswerResponseDTO>()
    };
    this.responseProviders.forEach(po => anwerRespDto.answers.push(po.getSelectedAnswers()));
    this.es.acceptEternalQuizAnswer(anwerRespDto).subscribe(
      feedback => {
        this.question = null;
        this.answerFeedback = feedback;
        this.errorMessage = null;
        this.statisticsComponent.refresh();
      },
      error => {
        console.log('error');
        this.errorMessage = error.toString();
        this.question = null;
        this.answerFeedback = null;
      }
    );
  }
}
