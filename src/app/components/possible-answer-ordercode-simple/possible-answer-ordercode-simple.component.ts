import {Component, Input, OnInit} from '@angular/core';
import {PossibleAnswerResponseProvider} from '../possible-answer-response-provider';
import {PossibleAnswerDTO, PossibleAnswerResponseDTO} from '../../../../build/openapi';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-possible-answer-ordercode-simple',
  templateUrl: './possible-answer-ordercode-simple.component.html',
  styleUrls: ['./possible-answer-ordercode-simple.component.scss'],
  providers: [{provide : PossibleAnswerResponseProvider, useExisting: PossibleAnswerOrdercodeSimpleComponent}]

})
export class PossibleAnswerOrdercodeSimpleComponent extends PossibleAnswerResponseProvider implements OnInit {

  @Input() possibleAnswer: PossibleAnswerDTO;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  getSelectedAnswers(): PossibleAnswerResponseDTO {
    return null;
  }

  drop(event: CdkDragDrop<string[]>): void {
    console.log(event.previousIndex);
    //this.possibleAnswer;
    moveItemInArray(this.possibleAnswer.possibleAnswerValues, event.previousIndex, event.currentIndex);
  }

}
