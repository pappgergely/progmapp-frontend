import {Component, OnInit} from '@angular/core';
import {QuizQuestion} from '../../interfaces/quiz-question';
import {QuizQuestionService} from '../../services/quiz-question.service';
import {QuestionDTO} from '../../../../build/openapi';


@Component({
  selector: 'app-quiz-question-list-page',
  templateUrl: './quiz-question-list-page.component.html',
  styleUrls: ['./quiz-question-list-page.component.scss']
})

export class QuizQuestionListPageComponent implements OnInit {

  filter: string;
  questions: QuizQuestion[];
  selectedQuestion: QuestionDTO;

  constructor(private quizQuestionService: QuizQuestionService) {
    this.questions = [];
    this.filter = '';
  }

  ngOnInit(): void {
    this.quizQuestionService.getQuizQuestions().subscribe(
      question => { this.questions = question;
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
