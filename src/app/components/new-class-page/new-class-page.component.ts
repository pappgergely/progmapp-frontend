import { Component, OnInit } from '@angular/core';
import {NewClass} from '../../interfaces/new-class';
import {NewClassService} from '../../services/new-class.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-class-page',
  templateUrl: './new-class-page.component.html',
  styleUrls: ['./new-class-page.component.scss']
})
export class NewClassPageComponent implements OnInit {

  classes: NewClass[];
  classSubscription: Subscription;
  filter: string;

  constructor(private classService: NewClassService, private router: Router) {
    this.classes = [];
  }

  ngOnInit(): void {
    this.classSubscription = this.classService.getClasses().subscribe(
      classes => {
        this.classes = classes;
      }
    );
  }

  // ngOnDestroy(): void {
  //   this.classSubscription.unsubscribe();
  // }
}
