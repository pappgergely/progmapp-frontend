import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {
  AnswerFeedbackDTO,
  AnswerResponseDTO,
  EternalQuizControllerService,
  OfficeAdminControllerService, PossibleAnswerDTO, PossibleAnswerResponseDTO,
  QuestionDTO,
} from '../../../../build/openapi';
import {PossibleAnswerResponseProvider} from '../possible-answer-response-provider';
import {EqStatisticsComponent} from '../eq-statistics/eq-statistics.component';
import {environment} from '../../../environments/environment';
import {QuestionStudentViewComponent} from '../question-student-view/question-student-view.component';

@Component({
  selector: 'app-student-quiz-page',
  templateUrl: './student-quiz-page.component.html',
  styleUrls: ['./student-quiz-page.component.scss']
})
export class StudentQuizPageComponent implements OnInit {

  question: QuestionDTO;
  answerFeedback: AnswerFeedbackDTO;
  errorMessage: string;

  @ViewChild(QuestionStudentViewComponent) studentViewComp: QuestionStudentViewComponent;

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



  setSpinner(): void{
    document.getElementById('spinnerOnButton').classList.add('spinner-border', 'spinner-border-sm');
    document.getElementById('sendAnswerButton').setAttribute('disabled', null);
  }

  sendAnswer(): void {
    console.log('sendAnswer called');
    console.log('child.length: ' + this.studentViewComp.responseProviders.length);
    const anwerRespDto: AnswerResponseDTO = {
      questionId: this.question.id,
      answers: new Array<PossibleAnswerResponseDTO>()
    };
    this.studentViewComp.responseProviders.forEach(po => anwerRespDto.answers.push(po.getSelectedAnswers()));
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
    this.setSpinner();
  }
}
