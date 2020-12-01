import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
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

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder,
              private questionService: QuizQuestionService) {}

  modifyForm: FormGroup;

  @Input()
  question: QuizQuestion;
  submitted = false;

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): FormGroup {
    return this.modifyForm = this.fb.group({
      id: this.fb.control(this.question.id),
      text: this.fb.control(this.question.text, Validators.required),
      adminDescription: this.fb.control(this.question.adminDescription),
      possibleAnswers: this.fb.array(this.question.possibleAnswers.map(possibleAnswer =>
      this.createPossibleAnswerForm(possibleAnswer))),
      feedbackType: this.fb.control(this.question.feedbackType, Validators.required),
      explanationAfter: this.fb.control(this.question.explanationAfter)
    });
  }

  private createPossibleAnswerForm(possibleAnswer: PossibleQuestionAnswers): FormGroup {
    return this.fb.group({
      textBefore: this.fb.control(possibleAnswer.textBefore),
      type: this.fb.control(possibleAnswer.type, Validators.required),
      possibleAnswerValues: this.fb.array(possibleAnswer.possibleAnswerValues.map(possibleAnswers =>
        this.createPossibleAnswerValueForm(possibleAnswers)))
    });
  }

  private createPossibleAnswerValueForm(possibleAnswerValues: PossibleAnswerValues): FormGroup {
    return this.fb.group({
      text: this.fb.control(possibleAnswerValues.text, Validators.required),
      isRightAnswer: this.fb.control(possibleAnswerValues.isRightAnswer)
    });
  }

  submit(): boolean {
    if (this.modifyForm.valid) {
      this.questionService.modifyQuestion(this.modifyForm.value);
      this.activeModal.close();
    } else {
      return false;
    }
  }

  remove(i: number): void {
    (((this.modifyForm.get('possibleAnswers') as FormArray).at(0) as FormArray).get('possibleAnswerValues') as FormArray).removeAt(i);
  }

  addNewPossibleAnswer(): void {
    const pav = this.createPossibleAnswerValueForm({ text: '', isRightAnswer: false });
    (((this.modifyForm.get('possibleAnswers') as FormArray).at(0) as FormArray).get('possibleAnswerValues') as FormArray).push( pav );
  }
}
