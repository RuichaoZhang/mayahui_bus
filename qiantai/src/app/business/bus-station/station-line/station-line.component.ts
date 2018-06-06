import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {BaseModel} from '../../BaseModel';
import {StationPoint} from '../station-point/station-point.component';
import {AppService} from '../../../app.service';
import {HttpService} from '../../../shared/http/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastService} from '../../../shared/toast/toast.service';
import {LocalStorageService} from '../../../shared/storage/local-storage.service';
import {ToastConfig, ToastType} from '../../../shared/toast/toast-model';

@Component({
  selector: 'app-station-line',
  templateUrl: './station-line.component.html',
  styleUrls: ['./station-line.component.scss']
})
export class StationLineComponent implements OnInit {

  data: StationLine[] = [];
  stations: string[] = [];

  constructor(private appService: AppService,
              private http: HttpService,
              private router: Router,
              private route: ActivatedRoute,
              private toastService: ToastService,
              private storage: LocalStorageService) {
  }

  ngOnInit() {
    this.http.get('findAllStation', null, (successful, data) => {
      this.stations = data.object.map(({stationName}) => stationName);
    });
    this.getData();
  }
  line=''
  findLines(line){
    this.http.get('findAllLine?lineNum='+line, null, (successful, data) => {
      this.data = data.object.map(item => ({...item, stationList: item.stationList.split(',')}));
    });
  }
  getData() {
    this.http.get('findAllLine', null, (successful, data) => {
      this.data = data.object.map(item => ({...item, stationList: item.stationList.split(',')}));
    });
  }


  model: StationLine = new StationLine();
  isVisible_create = false;

  createOkClick(model: StationLine) {
    model.createTime = moment().format('YYYY-MM-DD HH:mm');
    for (let key of ['lineName', 'lineNum', 'start', 'end']) {
      if (!model[key]) {
        const toastCfg = new ToastConfig(ToastType.ERROR, '', '必填项未完成', 3000);
        this.toastService.toast(toastCfg);
        return;
      }
    }
    this.http.post('addLine', {
      ...model,
      stationList: model.stationList.filter(item => !!item).join(','),
      attribute1: `${model.start},${model.stationList.filter(item => !!item).join(',')},${model.end}`
    }, (successful, data, message) => {
      this.isVisible_create = false;
      this.model = new StationLine();
      this.getData();
    });
  }

  edit(model: StationLine) {
    console.log('edit', model);
    this.isVisible_create = true;
    this.model = {...model};
  }


  remove(id) {
    this.http.delete(`api/lines/${id}`, null, (successful, data, message) => {
      this.getData();
    });
  }

}

export class StationLine extends BaseModel {
  lineName: string;
  lineNum: string;
  lineDescription: string;
  stationList = [];
  createTime: string;
  start: string;
  end: string;
  shuNiuZhan: string;
}
