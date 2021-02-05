import { DropdownQuestion } from '../models/question-dropdown';
import { QuestionBase } from '../models//question-base';

export const QUARRAY: QuestionBase<string>[] = [
{ 
  controlType: 'dropdown',
  key: 'systemType',
  label: 'What System Type is this for?', 
  options: [
    {key: 'OnBase',  value: 'OnBase'},
    {key: 'Brainware',  value: 'Brainware'},
    {key: 'Acuo',   value: 'Acuo'}
  ],
  required: true,
  order: 1,  
},
{ 
  controlType: 'textbox',
  key: 'reviewedByName',
  label: 'Who reviewed this issue?',
  value: '',
  required: false,
  placeholder: 'Marty McFly',
  order: 2
},
{ 
  controlType: 'dropdown',
  key: 'module',
  label: 'What Module does this affect?',
  options: [
    {key: 'Application Server',  value: 'Application Server'},
    {key: 'Web Server',  value: 'Web Server'},
    {key: 'Authentication',   value: 'Authentication'}
  ],
  required: true,
  order: 3
}
];
