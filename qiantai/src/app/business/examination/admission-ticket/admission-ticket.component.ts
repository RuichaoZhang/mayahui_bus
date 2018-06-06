import { Component, OnInit } from '@angular/core';
import {BaseModel} from '../../BaseModel';
import {BaseInterface} from '../../BaseInterface';
import {GridConfig} from '../../../shared/commom-page/GridConfig';

@Component({
  selector: 'app-admission-ticket',
  templateUrl: './admission-ticket.component.html',
  styleUrls: ['./admission-ticket.component.scss']
})
export class AdmissionTicketComponent implements OnInit, BaseInterface {

  constructor() { }

  ngOnInit() {
  }

  gridCfg: GridConfig[] = [{
    columnName: '准考证号',
    columnFiled: 'admissionTicketNum'
  }, {
    columnName: '考生Id',
    columnFiled: 'userId'
  }, {
    columnName: '考生姓名',
    columnFiled: 'userName'
  }];
  model: AdmissionTicket = new AdmissionTicket();

  create = () => false

}

export class AdmissionTicket extends BaseModel{
  /**
   * 准考证号
   * 考点编号 + 科目编号 + 报考顺序号
   */
  admissionTicketNum: string;

  /**
   * 考生Id
   */
  userId: number;

  /**
   * 考生姓名
   */
  userName: string;
}
