import { Component, OnInit } from '@angular/core';
import {ExamSubject} from './ExamSubject';
import {GridConfig} from '../../../shared/commom-page/GridConfig';

@Component({
  selector: 'app-exam-subject',
  templateUrl: './exam-subject.component.html',
  styleUrls: ['./exam-subject.component.scss']
})
export class ExamSubjectComponent implements OnInit {

  model: ExamSubject = new ExamSubject()

  gridCfg: GridConfig[] = [{
    columnName: '考试科目编号',
    columnFiled: 'examSubjectNum'
  },{
    columnName: '考试科目名称',
    columnFiled: 'examSubjectName'
  }]

  constructor() { }

  ngOnInit() {
  }

}
