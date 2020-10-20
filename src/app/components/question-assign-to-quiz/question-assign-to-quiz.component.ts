import { Component, OnInit } from '@angular/core';
import {Eternalquiz} from '../../interfaces/eternalquiz';
import {EternalQuizService} from '../../services/eternal-quiz.service';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizQuestion} from '../../interfaces/quiz-question';

@Component({
  selector: 'app-question-assign-to-quiz',
  templateUrl: './question-assign-to-quiz.component.html',
  styleUrls: ['./question-assign-to-quiz.component.scss']
})
export class QuestionAssignToQuizComponent implements OnInit {

  quiz: Eternalquiz;
  quizzes: Eternalquiz[];
  question: QuizQuestion;
  questionId: string[];

  constructor(private quizService: EternalQuizService, private route: ActivatedRoute,
              private router: Router) {
    this.quiz = {
      id: '',
      questionIds: [],
    };
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.questionId = params.questionId;
    });
    this.quizService.getQuiz().subscribe(resp => this.quizzes = resp);
  }

  assignQuestionToQuiz(): void {
    this.quizService.assignSimpleQuestionToQuiz(this.quiz, this.questionId).subscribe( () => {
      this.router.navigateByUrl('/quiz-question-list');
    });
  }
}
