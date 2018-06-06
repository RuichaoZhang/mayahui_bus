import { Component, OnInit } from '@angular/core';
import {BaseModel} from '../../BaseModel';
import {BaseInterface} from '../../BaseInterface';
import {GridConfig} from '../../../shared/commom-page/GridConfig';
import {ExamLocation} from '../exam-location/ExamLocation';
import {HttpService} from '../../../shared/http/http.service';

@Component({
  selector: 'app-examination-venue',
  templateUrl: './examination-venue.component.html',
  styleUrls: ['./examination-venue.component.scss']
})
export class ExaminationVenueComponent implements OnInit, BaseInterface {

  constructor(
    private http: HttpService
  ) { }

  ngOnInit() {
    this.http.get('api/examLocations', null, (successful,{_embedded: {examLocations}}) => {
      this.examLocations = examLocations
    })
  }

  gridCfg: GridConfig[] = [{
    columnName: '考场编号',
    columnFiled: 'examinationVenueNum'
  }, {
    columnName: '考场名称',
    columnFiled: 'examinationVenueName'
  }, {
    columnName: '考点名称',
    columnFiled: 'examLocationName'
  }, {
    columnName: '考点编号',
    columnFiled: 'examLocationNum'
  }, {
    columnName: '机器数量',
    columnFiled: 'machineNum'
  }];
  model: ExaminationVenue = new ExaminationVenue();

  examLocations: ExamLocation[] = []

  modelChange(model: ExaminationVenue) {
    // const examLocation: ExamLocation = this.examLocations.find(({examLocationName}) => examLocationName === model.examLocationName);
    // if (examLocation) {
    //   model.examLocationNum = examLocation.examLocationNum
    // }
    this.model = model
  }

  examLocationChange(_examLocationName) {
    const examLocation: ExamLocation = this.examLocations.find(({examLocationName}) => examLocationName === _examLocationName);
    this.model.examLocationNum = examLocation.examLocationNum
  }

}

export class ExaminationVenue extends BaseModel{
  /**
   * 考场编号
   * eg:001;002
   */
  examinationVenueNum: string;

  /**
   * 考场名称
   * eg:1号;2号
   */
  examinationVenueName: string;


  /**
   * 考点名称
   * eg:从ExcamLocation的examLocationName取
   */
  examLocationName: string;

  /**
   * 考点编号
   * eg:从ExcamLocation的examLocationNum取
   */
  examLocationNum: string;

  /**
   * 机器数量
   * 编排考生的数量不能超过机器数量
   */
  machineNum: string;
}
