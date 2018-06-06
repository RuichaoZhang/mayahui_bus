import { Component, OnInit } from '@angular/core';
import {ExamLocation} from './ExamLocation';
import {GridConfig} from '../../../shared/commom-page/GridConfig';
import {BaseInterface} from "../../BaseInterface"

@Component({
  selector: 'app-exam-location',
  templateUrl: './exam-location.component.html',
  styleUrls: ['./exam-location.component.scss']
})
export class ExamLocationComponent implements OnInit, BaseInterface {

  model: ExamLocation = new ExamLocation()

  gridCfg: GridConfig[] = [{
    columnName: '考点编号',
    columnFiled: 'examLocationNum'
  },{
    columnName: '考点名称',
    columnFiled: 'examLocationName'
  }]

  constructor() { }

  ngOnInit() {
  }

  edit = () => false

}
