import {Component, OnInit} from '@angular/core';
import {BaseModel} from '../../BaseModel';
import {BaseInterface} from '../../BaseInterface';
import {GridConfig, Option} from '../../../shared/commom-page/GridConfig';
import {ExamSubject} from '../exam-subject/ExamSubject';
import {ExamLocation} from '../exam-location/ExamLocation';
import {HttpService} from '../../../shared/http/http.service';
import {User} from '../../home/home.component';
import {LocalStorageService} from '../../../shared/storage/local-storage.service';
import {CURRENTUSE} from '../../../main/auth-guard.service';
import {ToastService} from '../../../shared/toast/toast.service';
import {ToastConfig, ToastType} from '../../../shared/toast/toast-model';

@Component({
  selector: 'app-candidate-registration',
  templateUrl: './candidate-registration.component.html',
  styleUrls: ['./candidate-registration.component.scss']
})
/**
 * 考生报名
 */
export class CandidateRegistrationComponent implements OnInit, BaseInterface {

  constructor(
    private http: HttpService,
    private toast: ToastService,
    private storage: LocalStorageService) {
    this.user = this.storage.getObject(CURRENTUSE) as User;
  }

  ngOnInit() {
    this.http.get('api/examLocations', null, (successful, {_embedded: {examLocations}}) => {
      this.examLocations = examLocations;
    });
    this.http.get('api/examSubjects', null, (successful, {_embedded: {examSubjects}}) => {
      this.examSubjects = examSubjects;
    });
  }

  user: User = new User();

  gridCfg: GridConfig[] = [{
    columnName: '考点编号',
    columnFiled: 'examLocationNum'
  }, {
    columnName: '考点名称',
    columnFiled: 'examLocationName'
  }, {
    columnName: '科目编号',
    columnFiled: 'examSubjectNum'
  }, {
    columnName: '科目名称',
    columnFiled: 'examSubjectName'
  }, {
    columnName: '考生id',
    columnFiled: 'userId'
  }, {
    columnName: '考生姓名',
    columnFiled: 'userName'
  }, {
    columnName: '报考顺序号',
    columnFiled: 'registrationOrderNum'
  }];
  model: CandidateRegistration = new CandidateRegistration();

  examLocations: ExamLocation[] = [];
  examSubjects: ExamSubject[] = [];

  examLocationChange(_examLocationName) {
    const examLocation: ExamLocation = this.examLocations.find(({examLocationName}) => examLocationName === _examLocationName);
    this.model.examLocationNum = examLocation.examLocationNum;
    this.model.userId = this.user.id;
    this.model.userName = this.user.userName;
    this.model.attribute5 = this.user.attribute1
  }

  examSubjectChange(_examSubjectName) {
    const examSubject: ExamSubject = this.examSubjects.find(({examSubjectName}) => examSubjectName === _examSubjectName);
    this.model.examSubjectNum = examSubject.examSubjectNum;
    this.model.userId = this.user.id;
    this.model.userName = this.user.userName;
    this.model.attribute5 = this.user.attribute1
  }

  options: Option[] = [{
    name: '查看准考证',
    click: (model: CandidateRegistration) => {
      if (model.attribute1.toString() === '1') {
        this.model = model
        this.modalVisable = true
      } else {
        const toastCfg = new ToastConfig(ToastType.WARNING, '', '暂无准考证', 3000);
        this.toast.toast(toastCfg);
      }
    }
  }];

  modalVisable = false;

  modalCancelClick() {
    this.modalVisable = false;
    this.model = new CandidateRegistration()
  }

  edit = () => false;
  remove = () => false;
  detail = () => false;

}

export class CandidateRegistration extends BaseModel {
  /**
   * 考点编号
   * 考生选取的考点
   * eg:从ExamLocation的examLocationNum来
   */
  examLocationNum: string;

  /**
   * 考点名称
   * 考生选取的考点
   * eg:从ExamLocation的examLocationName来
   */
  examLocationName: string;

  /**
   * 考生id
   */
  userId: number;

  /**
   * 考生姓名
   */
  userName: string;

  /**
   * 科目编号
   * 考生选取的科目
   * eg:从ExamSubject的examSubjectNum来
   */
  examSubjectNum: string;

  /**
   * 科目名称
   * 考生选取的科目
   * eg:从ExamSubject的examSubjectName来
   */
  examSubjectName: string;

  /**
   * 报考顺序号
   * eg:张三报考了Java,那么此值为0,李四接着报考,那么此值为1
   */
  registrationOrderNum: string;
}
