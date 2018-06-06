import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { MainComponent }   from './main.component';
import {AuthGuard} from './auth-guard.service';

/**
 * 主体路由
 */
const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: 'home', loadChildren: 'app/business/home/home.module#HomeModule' },
      { path: 'bus-station', loadChildren: 'app/business/bus-station/bus-station.module#BusStationModule' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
