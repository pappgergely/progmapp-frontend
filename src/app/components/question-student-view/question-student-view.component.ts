import {Component, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {PossibleAnswerDTO, QuestionDTO} from '../../../../build/openapi';
import {environment} from '../../../environments/environment';
import {PossibleAnswerResponseProvider} from '../possible-answer-response-provider';

@Component({
  selector: 'app-question-student-view',
  templateUrl: './question-student-view.component.html',
  styleUrls: ['./question-student-view.component.scss']
})
export class QuestionStudentViewComponent implements OnInit {

  @Input() question: QuestionDTO;

  @ViewChildren(PossibleAnswerResponseProvider) responseProviders: QueryList<PossibleAnswerResponseProvider>;


  constructor() { }

  ngOnInit(): void {
  }

  getQuesiontImageUrl(): string {
    if (this.question.hasImage) {
      return environment.serverUrl + 'question/' + this.question.id + '/imagefile';
    }
    return null;
  }

  getPosibleAnswerImageUrl(po: PossibleAnswerDTO): string {
    if (po.hasImage) {
      return environment.serverUrl + 'question/possibleanswer/' + po.id + '/imagefile';
    }
    return null;
  }

}
