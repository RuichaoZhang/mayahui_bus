import {Component, OnInit, ViewChild} from '@angular/core';
import {BaseModel} from '../../BaseModel';
import {BaseInterface} from '../../BaseInterface';
import {Action, GridConfig} from '../../../shared/commom-page/GridConfig';
import {ExamLocation} from '../exam-location/ExamLocation';
import {ExamSubject} from '../exam-subject/ExamSubject';
import {User} from '../../home/home.component';
import {CURRENTUSE} from '../../../main/auth-guard.service';
import {LocalStorageService} from '../../../shared/storage/local-storage.service';
import {HttpService} from '../../../shared/http/http.service';
import {CommomPageComponent} from '../../../shared/commom-page/commom-page.component';
import {ExaminationVenue} from '../examination-venue/examination-venue.component';

@Component({
  selector: 'app-examination-choreography',
  templateUrl: './examination-choreography.component.html',
  styleUrls: ['./examination-choreography.component.scss']
})
/**
 * 考试编排
 */
export class ExaminationChoreographyComponent implements OnInit, BaseInterface {

  constructor(
    private http: HttpService,
    private storage: LocalStorageService) {
    this.user = this.storage.getObject(CURRENTUSE) as User;
  }

  @ViewChild('CommonPage', undefined) CommonPage: CommomPageComponent;

  ngOnInit() {
    this.http.get('api/examinationVenues', null, (successful, {_embedded: {examinationVenues}}) => {
      this.examinationVenues = examinationVenues;
    });
    this.http.get('api/examSubjects', null, (successful, {_embedded: {examSubjects}}) => {
      this.examSubjects = examSubjects;
    });
  }

  user: User = new User();

  gridCfg: GridConfig[] = [
    {columnName: '考试科目编号', columnFiled: 'examSubjectNum'},
    {columnName: '考试科目名称', columnFiled: 'examSubjectName'},
    {columnName: '考场编号', columnFiled: 'examLocationNum'},
    {columnName: '考场名称', columnFiled: 'examLocationName'},
    {columnName: '考试开始时间', columnFiled: 'startTime'},
    {columnName: '考试结束时间', columnFiled: 'endTime'},
    {columnName: '考试用户列表', columnFiled: 'userList'},
  ];
  model: ExaminationChoreography = new ExaminationChoreography();

  actions: Action[] = [{
    name: '编排',
    click: _ => this.isVisible = true,
    show: _ => true
  }];

  examinationVenues: ExaminationVenue[] = [];
  examSubjects: ExamSubject[] = [];

  examLocationChange(_examinationVenueName) {
    const examinationVenue: ExaminationVenue = this.examinationVenues.find(({examinationVenueName}) => examinationVenueName === _examinationVenueName);
    this.model.examLocationNum = examinationVenue.examinationVenueNum;
  }

  examSubjectChange(_examSubjectName) {
    const examSubject: ExamSubject = this.examSubjects.find(({examSubjectName}) => examSubjectName === _examSubjectName);
    this.model.examSubjectNum = examSubject.examSubjectNum;
  }

  isVisible = false;
  create = () => false;
  remove = () => false;
  edit = () => false;
  detail = () => false;

  OkClick() {
    this.http.put('examinationChoreography', this.model, (successful, data, res) => {
      this.isVisible = false
      this.CommonPage.refresh()
      this.model = new ExaminationChoreography()
    });
  }


}

export class ExaminationChoreography extends BaseModel {
  /**
   * 考试科目编号,
   * eg:001;002之类
   */
  examSubjectNum: string;

  /**
   * 考试科目名称,
   * eg:001;002之类
   */
  examSubjectName: string;

  /**
   * 考场编号,
   * eg:001;002之类
   */
  examLocationNum: string;

  /**
   * 考场名称,
   * eg:001;002之类
   */
  examLocationName: string;

  /**
   * 考试开始时间
   */
  startTime: any = new Date();

  /**
   * 考试结束时间
   */
  endTime: any = new Date();

  /**
   * 考试用户列表
   */
  userList: string;
}
