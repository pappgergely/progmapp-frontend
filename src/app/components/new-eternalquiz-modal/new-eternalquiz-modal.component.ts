import {Component, OnInit} from '@angular/core';
import {Eternalquiz} from '../../interfaces/eternalquiz';
import {EternalQuizService} from '../../services/eternal-quiz.service';
import {QuizQuestion} from '../../interfaces/quiz-question';
import {FeedbackType} from '../../enum/feedback-type.enum';
import {QuizQuestionService} from '../../services/quiz-question.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AnswerType} from '../../enum/question-type.enum';

@Component({
  selector: 'app-new-foreverquiz-modal',
  templateUrl: './new-eternalquiz-modal.component.html',
  styleUrls: ['./new-eternalquiz-modal.component.scss']
})
export class NewEternalquizModalComponent implements OnInit {

  quiz: Eternalquiz;
  quizId: string;
  textShow: boolean;
  question: QuizQuestion;
  questions: QuizQuestion[];

  public expanded = false;

  constructor(private quizService: EternalQuizService, private questionService: QuizQuestionService, private route: ActivatedRoute,
              private router: Router) {
    this.quiz = {
      id: '',
      questionIds: [],
    };

    this.question = {
      id: null,
      createdAt: null,
      updatedAt: null,
      createdBy: '',
      lastModifiedBy: '',
      text: '',
      adminDescription: '',
      explanationAfter: '',
      answerTimeInSec: null,
      evaluationAlogrithm: '',
      feedbackType: FeedbackType.default,
      hasImage: null,
      possibleAnswers: [
        {
          id: '',
          createdAt: null,
          updatedAt: null,
          createdBy: '',
          lastModifiedBy: '',
          textBefore: '',
          textAfter: '',
          type: AnswerType.default,
          hasImage: null,
          order: '',
          unitTestCode: '',
          possibleAnswerValues: [
            {
              id: '',
              createdAt: null,
              updatedAt: null,
              createdBy: '',
              lastModifiedBy: '',
              text: '',
              isRightAnswer: true,
              rightOrder: null,
            }
          ]
        }
      ],
    };
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.quiz;
    });
    this.questionService.getQuizQuestions().subscribe(resp => this.questions = resp);
  }

  saveQuiz(): void {
    this.quizService.addQuiz(this.quiz, this.question);
    this.quizService.assignQuestionToQuiz(this.quiz, this.question).subscribe( () => {
      this.router.navigateByUrl('/eternal-quiz-list');
    });
    this.textShow = true;
  }
}
