import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Validators, FormControl, FormGroup, FormBuilder} from '@angular/forms';

import {HttpService} from '../shared/http/http.service';

import {ToastService} from '../shared/toast/toast.service';
import {ToastConfig, ToastType} from '../shared/toast/toast-model';
import {LocalStorageService} from '../shared/storage/local-storage.service';
import {CURRENTUSE} from '../main/auth-guard.service';
import {RegistUser} from "./model";

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class registerComponent implements OnInit {

  model: RegistUser = new RegistUser();

  userTypeOptions: Array<any> = ['考生'];

  constructor(private router: Router,
              private toastService: ToastService,
              private httpService: HttpService,
              private storage: LocalStorageService,
              private formBuilder: FormBuilder) {

  }

  /**
   * 初始化
   */
  ngOnInit() {

  }

  cancel() {
    this.router.navigate(['/login']);
  }

  vaild(): boolean {
    const {userName, userType, age, password, rPassword,attribute1, attribute2} = this.model;
    let errorMsg = '';
    if (!userName) {
      errorMsg = '用户名不能为空';
    } else if (!userType) {
      errorMsg = '用户类型不能为空';
    } else if (!attribute1) {
      errorMsg = '身份证号码不能为空';
    } else if (attribute1.toString().length !== 15 && attribute1.toString().length !== 18) {
      errorMsg = '身份证号码不正确';
    } else if (!attribute2) {
      errorMsg = '电话号码不能为空';
    }
    else if (!password) {
      errorMsg = '密码不能为空';
    } else if (password !== rPassword) {
      errorMsg = '两次密码不一致';
    }
    if (errorMsg) {
      const toastCfg = new ToastConfig(ToastType.ERROR, '', errorMsg, 3000);
      this.toastService.toast(toastCfg);
      return false;
    }

    return true
  }

  registHandle() {
    let that = this;
    this.httpService.post('api/users', this.model, function (successful, data, res) {
      const toastCfg = new ToastConfig(ToastType.SUCCESS, '', '注册成功', 3000);
      that.toastService.toast(toastCfg);
      that.router.navigate(['/login']);
    }, function (successful, msg, err) {
      const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
      that.toastService.toast(toastCfg);
    });
  }

  /**
   * 注册
   */
  regist() {
    if (!this.vaild()) {
      return;
    }

    let that = this;
    this.httpService.get(`checkUserExits?userName=${this.model.userName}`, null,
      (successful, data, res) => {
        if (!data.success) {
          const toastCfg = new ToastConfig(ToastType.WARNING, '', data.message);
          that.toastService.toast(toastCfg);
          return;
        }
        that.registHandle();
      }, (successful, msg, err) => {
        const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
        that.toastService.toast(toastCfg);
      });
  }

}
