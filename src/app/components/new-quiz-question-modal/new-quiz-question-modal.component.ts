import {Component, Input, OnInit} from '@angular/core';
import {QuizQuestionService} from '../../services/quiz-question.service';
import {QuizQuestion} from '../../interfaces/quiz-question';
import {UploadImage} from '../../interfaces/upload-image';
import {FeedbackType} from '../../enum/feedback-type.enum';
import {QuestionType} from '../../enum/question-type.enum';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-new-quiz-question-modal',
  templateUrl: './new-quiz-question-modal.component.html',
  styleUrls: ['./new-quiz-question-modal.component.scss']
})
export class NewQuizQuestionModalComponent implements OnInit {

  textShow: boolean;
  question: QuizQuestion;
  public environment = environment;

  @Input()
  image: UploadImage;

  constructor(private quizQuestionService: QuizQuestionService) {
    this.question = {
      id: null,
      text: '',
      explanationAfter: '',
      feedbackType: FeedbackType.default,
      possibleAnswers: [
        {
          textBefore: '',
          type: QuestionType.default,
          possibleAnswerValues: [
            {
              text: '',
              isRightAnswer: false
            }
          ]
        }
      ],
    };
  }

  options = {
    placeholderText: 'Kérdés szövege...',
    charCounterCount: false,
    attribution: false,
  };

  ngOnInit(): void {
  }

  saveQuizQuestion(): void {
    this.quizQuestionService.addQuizQuestion(this.question);
    this.textShow = true;
    window.scroll(0, 0);
  }

  saveImage(event): void {
    const uploadImage = new FormData();
    uploadImage.append('picture', event.target.files[0]);
    this.quizQuestionService.uploadImage(uploadImage)
      .subscribe(resp => resp.picture.id,
        error => alert('Nem megfelelő formátumú a kép.'));
  }

  addNewPossibleAnswer(): void {
    this.question.possibleAnswers[0].possibleAnswerValues.push({ text: '', isRightAnswer: false });
  }
}
