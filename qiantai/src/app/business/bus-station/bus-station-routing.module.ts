import {NgModule}   from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StationPointComponent} from './station-point/station-point.component';
import {StationLineComponent} from './station-line/station-line.component';


const routes: Routes = [
  {
    path: 'station-point', component: StationPointComponent,
  },
  {
    path: 'station-line', component: StationLineComponent,
  },
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BusStationRoutingModule {
}
