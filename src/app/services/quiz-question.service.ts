import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {QuizQuestion} from '../interfaces/quiz-question';
import {HttpClient} from '@angular/common/http';
import {QuizQuestionsResponse} from '../interfaces/quiz-questions-response';
import {UploadImageResponse} from '../interfaces/upload-image-response';
import {CodeOrder} from '../interfaces/code-order';
import {CodeOrderResponse} from '../interfaces/code-order-response';

@Injectable({
  providedIn: 'root'
})
export class QuizQuestionService {

  private readonly SERVER_URL = environment.serverUrl + 'question';
  private readonly SERVER_URL2 = environment.serverUrl + 'orderlinesquestion';
  private quizQuestions: BehaviorSubject<QuizQuestion[]>;
  private codeOrderQuestion: BehaviorSubject<CodeOrder[]>;

  constructor(private http: HttpClient) {
    this.quizQuestions = new BehaviorSubject([]);
    this.codeOrderQuestion = new BehaviorSubject([]);
  }

  getQuizQuestions(): Observable<QuizQuestion[]> {
    this.http.post<QuizQuestion[]>(this.SERVER_URL + '/search',
      { questionText: '',
        uploader: null,
        notInEternalQuiz: null,
        uploadTimeFrom: '',
        uploadTimeTo: ''},
      {withCredentials: true}
      ).subscribe(resp => this.quizQuestions.next(resp));
    return this.quizQuestions.asObservable();
  }

  private updateQuizQuestion(response: QuizQuestionsResponse): void {
    if (response.success) {
      this.quizQuestions.next(response.quizQuestion);
    }
  }

  addQuizQuestion(q: QuizQuestion, imageFormData: FormData): void {
    this.http.post<QuizQuestionsResponse>(
      this.SERVER_URL,
      q,
      { withCredentials: true }
    ).subscribe(resp => {
      this.updateQuizQuestion(resp);
      if (imageFormData) {
        this.uploadImage(imageFormData, resp.idOfCreatedEntity).subscribe(() => {});
      }
    });
  }

  uploadImage(image: FormData, questionId: string): Observable<UploadImageResponse> {
    return this.http.post<UploadImageResponse>(this.SERVER_URL + '/' + questionId + '/imagefile',
      image,
      {withCredentials: true});
  }

  addCodeOrderQuestion(q: CodeOrder): void {
    this.http.post<CodeOrderResponse>(
      this.SERVER_URL2,
      q,
      {withCredentials: true}
    ).subscribe(resp => {
        this.updateCodeOrderQuizQuestion(resp);
    });
  }

  private updateCodeOrderQuizQuestion(response: CodeOrderResponse): void {
    if (response.success) {
      this.codeOrderQuestion.next(response.codeOrder);
    }
  }

  modifyQuestion(q: QuizQuestion): void {
    this.http.put<QuizQuestionsResponse>(
      this.SERVER_URL,
      q,
      {withCredentials: true}
    ).subscribe(resp => this.updateQuizQuestion(resp));
  }
}
