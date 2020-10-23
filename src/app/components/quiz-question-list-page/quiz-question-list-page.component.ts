import {Component, OnInit} from '@angular/core';
import {QuestionDTO, QuestionSearchDto, TestControllerService} from '../../../../build/openapi';


@Component({
  selector: 'app-quiz-question-list-page',
  templateUrl: './quiz-question-list-page.component.html',
  styleUrls: ['./quiz-question-list-page.component.scss']
})

export class QuizQuestionListPageComponent implements OnInit {

  filter: QuestionSearchDto;
  questions: QuestionDTO[];
  selectedQuestion: QuestionDTO;

  constructor(private testControllerService: TestControllerService) {
    this.questions = null;
    this.filter = {
      notInEternalQuiz: true
    };
  }

  ngOnInit(): void {
    this.doSearch();
  }

  doSearch(): void{
    this.questions = null;
    this.testControllerService.findQuestions(this.filter).subscribe(
      questionList => {
        this.questions = questionList;
      }
    );
  }

  showQuestionPopup(question: QuestionDTO): void{
    this.selectedQuestion = question;
    document.getElementById('showQuestionModal').style.display = 'block';
  }

  closeModal(): void {
    this.selectedQuestion = null;
    document.getElementById('showQuestionModal').style.display = 'none';
  }
}
