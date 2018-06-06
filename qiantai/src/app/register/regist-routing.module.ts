import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import {registerComponent} from './register.component';


/**
 * 主体路由
 */
const registerRoutes: Routes = [
  {
    path: '',
    component: registerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(registerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RegisterRoutingModule { }
