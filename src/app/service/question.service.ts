import { Injectable } from '@angular/core';

import { DropdownQuestion } from '../models/question-dropdown';
import { QuestionBase } from '../models//question-base';
import { TextboxQuestion } from '../models//question-textbox';
import { QUARRAY } from './mock-questions'
import { of } from 'rxjs';

@Injectable()
export class QuestionService {
  questions: QuestionBase<string>[] = [];
  // TODO: get from a remote source of question metadata
  getQuestions() {
    this.questions.push(
      new DropdownQuestion({
        key: 'systemType',
        label: 'What is the System Type?',
        options: [
          {key: 'OnBase',  value: 'OnBase'},
          {key: 'Brainware',  value: 'Brainware'},
          {key: 'Acuo',   value: 'Acuo'}
        ],
        order: 1
      }),
      new DropdownQuestion({
        key: 'reviewedBy',
        label: 'Have you spoken with a MA,ME,A4 or Manager?',
        options: [
          {key: 'Yes',  value: 'Yes'},
          {key: 'No',  value: 'No'}
        ],
        order: 2
      }),
      new DropdownQuestion({
        key: 'typeOfRFA',
        label: 'What type of RFA?',
        options: [
          {key: 'R&D',  value: 'R&D'},
          {key: 'Defect',  value: 'Defect'},
          {key: 'Database',  value: 'Database'}
        ],
        order: 4
      }),
      new TextboxQuestion({
        key: 'reviewedByName',
        label: 'Who reviewed this issue?',
        value: '',
        required: false,
        order: 3
      }),
    );

    return of(this.questions.sort((a, b) => a.order - b.order));
  }

  getQuestionArray(){
    this.questions = QUARRAY;
    return of(this.questions.sort((a, b) => a.order - b.order));
  }
}
