import { Component, OnInit } from '@angular/core';
import {BaseModel} from '../../BaseModel';
import {AppService} from '../../../app.service';
import {HttpService} from '../../../shared/http/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastService} from '../../../shared/toast/toast.service';
import {LocalStorageService} from '../../../shared/storage/local-storage.service';
import * as moment from "moment"
import {ToastConfig, ToastType} from '../../../shared/toast/toast-model';

@Component({
  selector: 'app-station-point',
  templateUrl: './station-point.component.html',
  styleUrls: ['./station-point.component.scss']
})
export class StationPointComponent implements OnInit {

  constructor(private appService: AppService,
              private http: HttpService,
              private router: Router,
              private route: ActivatedRoute,
              private toastService: ToastService,
              private storage: LocalStorageService) { }

  data: StationPoint[] = []
  ngOnInit() {
    this.getData()
  }
  station=''
  searchStation(station){
    this.http.get('findAllStation?station=' + station, null, (successful, data) => {
      this.data = data.object
    });
  }
  getData() {
    this.http.get('findAllStation', null, (successful, data) => {
      this.data = data.object
    });
  }

  model: StationPoint = new StationPoint()
  isVisible_create = false
  createOkClick(model: StationPoint) {
    model.createTime = moment().format('YYYY-MM-DD HH:mm')
    for (let key of ['stationNum', 'stationName', 'stationType']) {
      if (!model[key]) {
        const toastCfg = new ToastConfig(ToastType.ERROR, '', '必填项未完成', 3000);
        this.toastService.toast(toastCfg);
        return
      }
    }
    this.http.post('addStation', model, (successful, data, message) => {
      this.isVisible_create = false;
      this.model = new StationPoint()
      this.getData()
    });
  }

  edit(model: StationPoint) {
    this.isVisible_create = true;
    this.model = {...model}
  }

  remove(id) {
    this.http.delete(`api/stations/${id}`, null, (successful, data, message) => {
      this.getData()
    });
  }

}

export class StationPoint extends BaseModel{
  stationNum: string;
  stationName: string;
  stationType: string;
  stationDescription: string;
  createTime: string;
}
