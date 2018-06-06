import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../shared/storage/local-storage.service';
import {HttpService} from '../shared/http/http.service';
import {AppService} from '../app.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastService} from '../shared/toast/toast.service';
import {StationLine} from '../business/bus-station/station-line/station-line.component';

@Component({
  selector: 'app-line-query',
  templateUrl: './line-query.component.html',
  styleUrls: ['./line-query.component.scss']
})
export class LineQueryComponent implements OnInit {

  constructor(private appService: AppService,
              private http: HttpService,
              private router: Router,
              private route: ActivatedRoute,
              private toastService: ToastService,
              private storage: LocalStorageService) { }

  ngOnInit() {
  }

  startStation= ''
  endStation= ''
  data: StationLine[] = []

  getLines(startStation, endStation) {
    this.http.get(`findRightLine?startStation=${startStation}&endStation=${endStation}`, null, (successful, data) => {
      this.data = data.object;
    });
  }

  clear() {
    this.startStation = ''
    this.endStation = ''
    this.data = []
  }


}
