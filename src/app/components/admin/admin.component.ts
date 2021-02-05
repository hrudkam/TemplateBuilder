import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../service/question.service';
import { QuestionBase } from '../../models/question-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers:  [QuestionService]
})
export class AdminComponent implements OnInit {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(
    private service: QuestionService
  ) { 
    this.questions$ = service.getQuestionArray();
  }

  ngOnInit(): void {
  }

}
