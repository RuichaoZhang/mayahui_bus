import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RegisterRoutingModule} from './regist-routing.module';
import {registerComponent} from './register.component';
import {SuiSelectModule} from "ng2-semantic-ui";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RegisterRoutingModule,
    SuiSelectModule
  ],
  declarations: [
    registerComponent
  ],
  exports: [],
  providers: []
})
export class RegisterModule {
}
