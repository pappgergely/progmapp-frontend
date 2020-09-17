import { Component, OnInit } from '@angular/core';
import {Eternalquiz} from '../../interfaces/eternalquiz';

@Component({
  selector: 'app-eternal-quiz-assign-class-modal',
  templateUrl: './eternal-quiz-assign-class-modal.component.html',
  styleUrls: ['./eternal-quiz-assign-class-modal.component.scss']
})
export class EternalQuizAssignClassModalComponent implements OnInit {

  constructor() { }

  quizzez: Eternalquiz;
  textShow: boolean;

  ngOnInit(): void {
  }

}
