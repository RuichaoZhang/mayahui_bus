import {NgModule}   from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExamSubjectComponent} from './exam-subject/exam-subject.component';
import {ExamLocationComponent} from './exam-location/exam-location.component';
import {ExaminationVenueComponent} from './examination-venue/examination-venue.component';
import {AdmissionTicketComponent} from './admission-ticket/admission-ticket.component';
import {CandidateRegistrationComponent} from './candidate-registration/candidate-registration.component';
import {ExaminationChoreographyComponent} from './examination-choreography/examination-choreography.component';
import {RegisterInfoManageComponent} from './register-info-manage/register-info-manage.component';


const contributionRoutes: Routes = [
  {
    path: 'exam-subject', component: ExamSubjectComponent,
  },
  {
    path: 'exam-location', component: ExamLocationComponent,
  },
  {
    path: 'examination-venue', component: ExaminationVenueComponent,
  },
  {
    path: 'admission-ticket', component: AdmissionTicketComponent,
  },
  {
    path: 'candidate-registration', component: CandidateRegistrationComponent,
  },
  {
    path: 'examination-choreography', component: ExaminationChoreographyComponent,
  },
  {
    path: 'register-info-manage', component: RegisterInfoManageComponent,
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(contributionRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ExaminationRoutingModule {
}
