import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamSubjectComponent } from './exam-subject/exam-subject.component';
import {CommomPageModule} from '../../shared/commom-page/commom-page.module';
import {ExaminationRoutingModule} from './examination-routing.module';
import {CommonTplModule} from '../../shared/common-tpl/common-tpl.module';
import {FormsModule} from '@angular/forms';
import {SuiSelectModule} from 'ng2-semantic-ui';
import { ExamLocationComponent } from './exam-location/exam-location.component';
import { ExaminationVenueComponent } from './examination-venue/examination-venue.component';
import { AdmissionTicketComponent } from './admission-ticket/admission-ticket.component';
import { CandidateRegistrationComponent } from './candidate-registration/candidate-registration.component';
import { ExaminationChoreographyComponent } from './examination-choreography/examination-choreography.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {NgbTimepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { RegisterInfoManageComponent } from './register-info-manage/register-info-manage.component';

@NgModule({
  imports: [
    CommonModule,
    CommomPageModule,
    ExaminationRoutingModule,
    FormsModule,
    SuiSelectModule,
    NgZorroAntdModule,
    NgbTimepickerModule
  ],
  declarations: [ExamSubjectComponent, ExamLocationComponent, ExaminationVenueComponent, AdmissionTicketComponent, CandidateRegistrationComponent, ExaminationChoreographyComponent, RegisterInfoManageComponent]
})
export class ExaminationModule { }
