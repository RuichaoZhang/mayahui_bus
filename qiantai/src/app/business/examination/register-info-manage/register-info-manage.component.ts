import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../shared/http/http.service';
import {AppService} from '../../../app.service';
import {LocalStorageService} from '../../../shared/storage/local-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastService} from '../../../shared/toast/toast.service';
import {CandidateRegistration} from '../candidate-registration/candidate-registration.component';
import {ExamSubject} from '../exam-subject/ExamSubject';

@Component({
  selector: 'app-register-info-manage',
  templateUrl: './register-info-manage.component.html',
  styleUrls: ['./register-info-manage.component.scss']
})
export class RegisterInfoManageComponent implements OnInit {

  constructor(private appService: AppService,
              private http: HttpService,
              private router: Router,
              private route: ActivatedRoute,
              private toastService: ToastService,
              private storage: LocalStorageService,) {
    this.http.get('api/examSubjects', null, (successful, {_embedded: {examSubjects}}) => {
      this.examSubjects = examSubjects;
    });
  }

  examSubjects: ExamSubject[] = [];

  ngOnInit() {
    this.appService.titleEventEmitter.emit('报名信息管理');
  }

  examSubjectChange(name) {
    this.http.get('findBySubName?examSubjectName=' + name, null, (successful, {_embedded: {candidateRegistrations}}) => {
      this.data = candidateRegistrations;
    });
  }

  data: CandidateRegistration[] = [];

}
