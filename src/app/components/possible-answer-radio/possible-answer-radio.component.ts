import {Component, Input, OnInit} from '@angular/core';
import {PossibleAnswerDTO, PossibleAnswerResponseDTO} from '../../../../build/openapi';
import {PossibleAnswerResponseProvider} from '../possible-answer-response-provider';

@Component({
  selector: 'app-possible-answer-radio',
  templateUrl: './possible-answer-radio.component.html',
  styleUrls: ['./possible-answer-radio.component.scss'],
  providers: [{provide : PossibleAnswerResponseProvider, useExisting: PossibleAnswerRadioComponent}]
})
export class PossibleAnswerRadioComponent extends PossibleAnswerResponseProvider implements OnInit {
  @Input() possibleAnswer: PossibleAnswerDTO;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  getSelectedAnswers(): PossibleAnswerResponseDTO {
    return null;
  }

}
