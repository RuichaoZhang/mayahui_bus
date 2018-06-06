import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Action, GridConfig, Option} from "./GridConfig";
import {HttpPaginationComponent} from "../pagination/http-pagination.component";
import {AppService} from "../../app.service";
import {HttpService} from "../http/http.service";
import {ToastConfig, ToastType} from '../toast/toast-model';
import {ToastService} from '../toast/toast.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LocalStorageService} from '../storage/local-storage.service';

@Component({
  selector: 'commom-page',
  templateUrl: './commom-page.component.html',
  styleUrls: ['./commom-page.component.scss']
})
export class CommomPageComponent implements OnInit {
  @Input() title: string
  @Input() api: string

  @Input() gridCfg: GridConfig[] = []

  @Input() create: any = () => true
  @Input() edit: any = () => true
  @Input() remove: any = () => true
  @Input() detail: any = () => true

  @Input() createText: string = '新增'

  @Input() model: any = {}

  @Input() actions: Action[]
  @Input() options: Option[]

  @Output() onModel = new EventEmitter();

  @ViewChild('hp', undefined) hp: HttpPaginationComponent;
  baseApi: string = 'api/'
  dataList: any[] = []

  isVisible_create = false
  isVisible_detail = false
  editModal_title = '添加'

  constructor(private appService: AppService,
              private http: HttpService,
              private router: Router,
              private route: ActivatedRoute,
              private toastService: ToastService,
              private storage: LocalStorageService,) {
  }

  ngOnInit() {
    this.appService.titleEventEmitter.emit(this.title);
  }

  refresh() {
    this.hp.search()
  }

  createClick() {
    this.onModel.emit({})
    this.isVisible_create = true
  }

  detailClick(data) {
    this.http.get(`${this.baseApi}${this.api}/${data.id}`, null,
      (successful, data, res) => {
        this.onModel.emit(data)
        this.isVisible_detail = true
      })

  }

  editClick(data) {
    this.http.get(`${this.baseApi}${this.api}/${data.id}`, null,
      (successful, data, res) => {
        this.onModel.emit(data)
        this.isVisible_create = true
      })
  }

  removeClick(data) {
    this.http.delete(`${this.baseApi}${this.api}/${data.id}`, null, () => {
      this.hp.search()
    })
  }

  editCancelClick() {
    this.isVisible_create = false
  }

  editOkClick() {
    if (this.model.id) {
      //修改
      this.http.post(`${this.baseApi}${this.api}`, this.model, () => {
        this.isVisible_create = false
        const toastCfg = new ToastConfig(ToastType.SUCCESS, '', '修改成功', 3000);
        this.toastService.toast(toastCfg);
        this.hp.search()
      })
    } else {
      //新增
      this.http.post(`${this.baseApi}${this.api}`, this.model, (successful, data, res) => {
        this.isVisible_create = false
        const toastCfg = new ToastConfig(ToastType.SUCCESS, '', '新增成功', 3000);
        this.toastService.toast(toastCfg);
        this.hp.search()
      }, (successful, msg, err) => {
        const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
        this.toastService.toast(toastCfg);
      })
    }
  }

  detailCancelClick() {
    this.isVisible_detail = false
  }


  onDataChanged(data) {
    this.dataList = data[this.api]
  }

}
