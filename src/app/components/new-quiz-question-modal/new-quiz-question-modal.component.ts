import {Component, Input, OnInit} from '@angular/core';
import {QuizQuestionService} from '../../services/quiz-question.service';
import {QuizQuestion} from '../../interfaces/quiz-question';
import {UploadImage} from '../../interfaces/upload-image';

@Component({
  selector: 'app-new-quiz-question-modal',
  templateUrl: './new-quiz-question-modal.component.html',
  styleUrls: ['./new-quiz-question-modal.component.scss']
})
export class NewQuizQuestionModalComponent implements OnInit {

  textShow: boolean;
  question: QuizQuestion;

  @Input()
  image: UploadImage;

  constructor(private quizQuestionService: QuizQuestionService) {
    this.question = {
      id: '',
      text: '',
      explanationAfter: '',
      feedbackType: '',
      possibleAnswers: [
        {
          textBefore: '',
          type: '',
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
    attribution: false
  };

  ngOnInit(): void {
  }

  saveQuizQuestion(): void {
    this.quizQuestionService.addQuizQuestion(this.question);
    this.textShow = true;
    window.scroll(0, 0);
  }

  saveImage(pic): void {
    const img = new FormData();
    img.append('image', pic.target.files[0]);
    this.quizQuestionService.uploadImage(img)
      .subscribe(resp => this.image.id = resp.picture.id,
        error => alert('Nem megfelelő formátumú a kép.'));
  }
}
