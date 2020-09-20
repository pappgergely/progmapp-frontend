import {Component, OnInit} from '@angular/core';
import {EternalQuizService} from '../../services/eternal-quiz.service';
import {QuizAssignToClass} from '../../interfaces/quiz-assign-to-class';
import {Class} from '../../interfaces/class';
import {Semester} from '../../enum/semester.enum';
import {ClassService} from '../../services/class.service';

@Component({
  selector: 'app-eternal-quiz-assign-class-modal',
  templateUrl: './eternal-quiz-assign-class-modal.component.html',
  styleUrls: ['./eternal-quiz-assign-class-modal.component.scss']
})
export class EternalQuizAssignClassModalComponent implements OnInit {

  textShow: boolean;
  classQuiz: QuizAssignToClass;
  class: Class;
  classes: Class[];

  constructor(private quizService: EternalQuizService, private classService: ClassService) {
    this.class = {
      id: '',
      year: null,
      semester: Semester.spring,
      isActive: true,
    };
    this.classQuiz = {
      eternalQuizId: '',
      schoolClassId: '',
    };
  }

  ngOnInit(): void {
    this.classService.getClasses().subscribe(resp => this.classes = resp);
  }

  assignClass(): void {
    this.quizService.assignQuizToClass(this.classQuiz);
  }

}
