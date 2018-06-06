import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationLineComponent } from './station-line/station-line.component';
import {BusStationRoutingModule} from './bus-station-routing.module';
import {StationPointComponent} from './station-point/station-point.component';
import {SuiSelectModule} from 'ng2-semantic-ui';
import {FormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    BusStationRoutingModule,
    SuiSelectModule,
    FormsModule,
    NgZorroAntdModule.forRoot()
  ],
  declarations: [StationPointComponent, StationLineComponent]
})
export class BusStationModule { }
