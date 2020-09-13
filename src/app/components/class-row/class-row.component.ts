import {Component, Input, OnInit} from '@angular/core';
import {NewClass} from '../../interfaces/new-class';
import {NewClassService} from '../../services/new-class.service';

@Component({
  selector: 'tr[ app-class-row ]',
  templateUrl: './class-row.component.html',
  styleUrls: ['./class-row.component.scss']
})

export class ClassRowComponent implements OnInit {

  //  TODO delete and modify methods

  @Input()
  class: NewClass;

  constructor(private classService: NewClassService) { }

  ngOnInit(): void {
  }

}
