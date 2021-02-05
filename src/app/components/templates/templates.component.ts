import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { QuestionService } from '../../service/question.service';
import { QuestionBase } from '../../models/question-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss'],
  providers:  [QuestionService]
})
export class TemplatesComponent implements OnInit {
  test = '';
  questions$: Observable<QuestionBase<any>[]>;

  constructor(
    private route: ActivatedRoute,
    private service: QuestionService
  ) {
    this.questions$ = service.getQuestionArray();
  }

  ngOnInit(): void {

    this.test = this.route.snapshot.paramMap.get('id');
  }

}
