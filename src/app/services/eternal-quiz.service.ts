import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {Eternalquiz} from '../interfaces/eternalquiz';
import {HttpClient} from '@angular/common/http';
import {EternalquizResponse} from '../interfaces/eternalquiz-response';
import {ClassEternalQuiz} from '../interfaces/class-eternal-quiz';
import {QuestionAssignToQuiz} from '../interfaces/question-assign-to-quiz';
import {QuizAssignToClass} from '../interfaces/quiz-assign-to-class';

@Injectable({
  providedIn: 'root'
})
export class EternalQuizService {

  private readonly SERVER_URL = environment.serverUrl + 'eternalquiz';
  private quizzez: BehaviorSubject<Eternalquiz[]>;
  private quizWithClass: BehaviorSubject<ClassEternalQuiz[]>;

  constructor(private http: HttpClient) {
    this.quizzez = new BehaviorSubject([]);
    this.quizWithClass = new BehaviorSubject([]);
  }

  getQuiz(): Observable<ClassEternalQuiz[]> {
    this.http.get<ClassEternalQuiz[]>(this.SERVER_URL,
      {withCredentials: true})
      .subscribe(resp => {
        this.quizWithClass.next(resp);
      });
    return this.quizWithClass.asObservable();
  }

  private updateQuizzes(response: EternalquizResponse): void {
    if (response.success) {
      this.quizzez.next(response.quiz);
    }
  }

  addQuiz(q: Eternalquiz): void {
    this.http.post<EternalquizResponse>(
      this.SERVER_URL,
      {quiz: q},
      { withCredentials: true }
    ).subscribe(resp => this.updateQuizzes(resp));
  }

  getQuizWithClass(): Observable<ClassEternalQuiz[]> {
    this.http.get<ClassEternalQuiz[]>(this.SERVER_URL,
      {withCredentials: true})
      .subscribe(resp => {
        this.quizWithClass.next(resp);
      });
    return this.quizWithClass.asObservable();
  }

  assignQuestionToQuiz(q: QuestionAssignToQuiz): void {
    this.http.put<EternalquizResponse>(this.SERVER_URL + '/quiz/question',
      {quiz: q},
      {withCredentials: true})
      .subscribe(resp => this.updateQuizzes(resp));
  }

  assignQuitToClass(q: QuizAssignToClass): void {
    this.http.put<EternalquizResponse>(this.SERVER_URL + '/quiz/class',
      {quiz: q},
      {withCredentials: true})
      .subscribe(resp => this.updateQuizzes(resp));
  }
}
