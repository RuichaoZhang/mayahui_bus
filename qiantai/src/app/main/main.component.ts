import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


import {MainData} from '../main/main-model';
import {ModalService} from '../shared/modal/modal.service';
import {ConfirmConfig} from '../shared/modal/modal-model';

import {AvatarCropperComponent} from '../business-shared/user/avatar-cropper/avatar-cropper.component';
import {PasswordEditComponent} from '../business-shared/user/password-edit/password-edit.component';
import {AppService} from '../app.service';
import {LocalStorageService} from '../shared/storage/local-storage.service';
import {CURRENTUSE} from './auth-guard.service';
import {User} from '../business/home/home.component';
import {ExaminationRoutingModule} from '../business/examination/examination-routing.module';
import {demoRoute} from './routeCfg/demoRoute';
import {roleRoute} from './routeCfg/roleRoute';
import {examinationRoute} from './routeCfg/examinationRoute';
import {busStationRoute} from './routeCfg/busStationRoute';

/**
 * 主体组件
 */
@Component({
  selector: 'c-main',
  templateUrl: './main.component.html',
  styleUrls: ['.//main.component.scss']
})
export class MainComponent implements OnInit {

  //切换导航
  toggleDescTip: string = '点击关闭导航菜单';

  //切换导航标识
  navClose: boolean = false;
  userData: User = new User();

  user: User = this.storage.getObject(CURRENTUSE);


  //用户数据
  mainData: MainData = {
    userData: {
      userName: '百变小咖',
      userAvatar: './assets/img/user-header.png',
      mobilePhone: '1895090***2',
      email: '332557712@qq.com',
      positions: 'Java工程师、打杂工程师',
    },
    menuData: [
      ...busStationRoute(this.user)
    ]
  };

  title: string = '首页';


  constructor(private router: Router,
              private modalService: ModalService,
              private ngbModalService: NgbModal,
              private appService: AppService,
              private storage: LocalStorageService
  ) {
    this.appService.titleEventEmitter.subscribe((value: string) => {
      if (value) {
        this.title = value;
      }
    });
  }


  /**
   * 初始化
   */
  ngOnInit() {
  }

  /**
   * 切换导航
   */
  toggleNav() {
    this.navClose = !this.navClose;
    if (this.navClose) {
      this.toggleDescTip = '点击展开导航菜单';
    } else {
      this.toggleDescTip = '点击关闭导航菜单';
    }
  }

  /**
   * 跳转首页
   */
  toHome() {
    this.title = '首页';
    this.router.navigate(['/app/home']);
  }

  /**
   * 个人资料
   */
  userInfo() {
    this.router.navigate(['/app/user/userInfo']);
  }

  /**
   * 头像更换
   */
  avatarReplacement() {
    this.ngbModalService.open(AvatarCropperComponent, {size: 'lg', backdrop: 'static', keyboard: false}).result.then((result) => {

    }, (reason) => {

    });
  }

  /**
   * 修改密码
   */
  passwordEdit() {
    this.ngbModalService.open(PasswordEditComponent, {size: 'lg'}).result.then((result) => {

    }, (reason) => {

    });
  }


  /**
   * 退出系统
   */
  exitSys() {
    let exitSysCfg = new ConfirmConfig('您确定退出系统吗？');
    this.modalService.confirm(exitSysCfg).then((result) => {
      if (result.status == 'approved') {
        this.storage.remove(CURRENTUSE);
        this.router.navigate(['/login']);
      }
    }, (reason) => {
    });
  }


}


