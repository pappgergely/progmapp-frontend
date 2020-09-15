import {Component, Input, OnInit} from '@angular/core';
import {Class} from '../../interfaces/class';
import {ClassService} from '../../services/class.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-class-row]',
  templateUrl: './class-row.component.html',
  styleUrls: ['./class-row.component.scss']
})

export class ClassRowComponent implements OnInit {

  @Input()
  classesName: Class;

  //  TODO delete and modify methods

  constructor(private classService: ClassService) { }

  ngOnInit(): void {
  }

}
