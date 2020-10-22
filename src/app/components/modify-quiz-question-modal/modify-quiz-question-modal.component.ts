import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuizQuestionService} from '../../services/quiz-question.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {QuizQuestion} from '../../interfaces/quiz-question';
import {PossibleAnswerValues} from '../../interfaces/possible-answer-values';
import {PossibleQuestionAnswers} from '../../interfaces/possible-question-answers';

@Component({
  selector: 'app-modify-quiz-question-modal',
  templateUrl: './modify-quiz-question-modal.component.html',
  styleUrls: ['./modify-quiz-question-modal.component.scss']
})
export class ModifyQuizQuestionModalComponent implements OnInit {

  form: FormGroup;
  question: QuizQuestion;
  possibleAnswer: PossibleQuestionAnswers;
  answersValue: PossibleAnswerValues;
  submitted = false;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder,
              private questionServeice: QuizQuestionService) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
      text: this.fb.control(this.question.text, Validators.required),
      description: this.fb.control(this.question.adminDescription, Validators.required),
      textBefore: this.fb.control(this.possibleAnswer.textBefore, Validators.required),
      answer: this.fb.control(this.answersValue.text, Validators.required),
      isRightAnswer: this.fb.control(this.answersValue.isRightAnswer, Validators.required),
      feedbackType: this.fb.control(this.question.feedbackType, Validators.required),
      explanation: this.fb.control(this.question.explanationAfter, Validators.required)
    });
  }

  submit(): boolean {
    if (this.form.valid) {
      this.questionServeice.modifyQuestion(this.question);
      this.activeModal.close();
    } else {
      return false;
    }
  }
}
