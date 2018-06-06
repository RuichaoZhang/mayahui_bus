import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { HttpService } from '../shared/http/http.service';

import { ToastService } from '../shared/toast/toast.service';
import { ToastConfig, ToastType } from '../shared/toast/toast-model';
import { CustomValidators } from '../shared/custom-validator/custom-validator';
import { UserBusinessService} from '../business-service/user/user-business.service';
import { Utils } from "../shared/util/utils";
import {LocalStorageService} from '../shared/storage/local-storage.service';
import {CURRENTUSE} from '../main/auth-guard.service';




@Component({
  selector: 'c-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private toastService: ToastService,
    private httpService: HttpService,
    private storage: LocalStorageService,
    private userBusinessService:UserBusinessService,
    private formBuilder: FormBuilder) {
    let userNameFc = new FormControl('admin', Validators.compose([Validators.required]));
    let passwordFc = new FormControl('123456', Validators.compose([Validators.required]));

    this.loginForm = this.formBuilder.group({
      userName: userNameFc,
      password: passwordFc
    });
  }

  /**
  * 初始化
  */
  ngOnInit() {

  }

  routeToRegister() {
    this.router.navigate(['/register']);
  }

  /**
   * 登录
   */
  login() {
   if (this.loginForm.valid) {
      let that = this;
      this.httpService.post('logon', {
        userName:  this.loginForm.controls['userName'].value,
        password:  this.loginForm.controls['password'].value
      }, function (successful, data, res) {
        console.log('登录结果', successful, data);
        if (!data.success) {
          const toastCfg = new ToastConfig(ToastType.WARNING, '', data.message);
          that.toastService.toast(toastCfg);
          return;
        }
        that.storage.setObject(CURRENTUSE, data.object);
        const toastCfg = new ToastConfig(ToastType.SUCCESS, '', data.message, 3000);
        that.toastService.toast(toastCfg);
        that.router.navigate(['/app/home']);

        // if (successful && Utils.resultSuccess(data.resultType)) {
        //   const toastCfg = new ToastConfig(ToastType.SUCCESS, '', data.resultMsg, 3000);
        //   that.toastService.toast(toastCfg);
        //   that.router.navigate(['/app/home']);
        // }else if(successful && Utils.resultFailure(data.resultType)){
        //   const toastCfg = new ToastConfig(ToastType.WARNING, '', data.resultMsg, 3000);
        //   that.toastService.toast(toastCfg);
        // }else{
        //   const toastCfg = new ToastConfig(ToastType.ERROR, '', data.resultMsg, 3000);
        //   that.toastService.toast(toastCfg);
        // }
      }, function (successful, msg, err) {
         const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
         that.toastService.toast(toastCfg);
      });

    }

    // const toastCfg = new ToastConfig(ToastType.SUCCESS, '', '登录成功！', 3000);
    // this.toastService.toast(toastCfg);
    // this.router.navigate(['/app/home']);
  }


}
