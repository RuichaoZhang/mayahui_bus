import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommomPageComponent } from './commom-page.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
 import {PaginationModule} from '../pagination/pagination.module';


@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    PaginationModule
  ],
  exports: [
    CommomPageComponent
  ],
  declarations: [CommomPageComponent]
})
export class CommomPageModule { }
