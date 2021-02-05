import { Component, Input, OnInit } from '@angular/core';

import { QuestionBase } from '../../../models/question-base';
import { QuestionControlService } from '../../../service/question-control.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-dynamic-card',
  templateUrl: './dynamic-card.html',
  styleUrls: ['./dynamic-card.scss'],
  providers: [ QuestionControlService ]
})
export class DynamicCardComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] = [];

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    console.log(this.questions.length)
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.questions, event.previousIndex, event.currentIndex);
  }
}
