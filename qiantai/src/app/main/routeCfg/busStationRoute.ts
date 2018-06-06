import {User} from '../../business/home/home.component';

const show = true;

export const busStationRoute = (user: User) => {

  return [
    {

      'id': '37',
      'parentId': '0',
      'name': '站点管理',
      'keyWord': 'tgl',
      'icon': 'fa-bus',
      'url': '/app/bus-station/station-point'
    },
    {

      'id': '38',
      'parentId': '0',
      'name': '线路管理',
      'keyWord': 'tgl',
      'icon': 'fa-bus',
      'url': '/app/bus-station/station-line'
    },
    {

      'id': '39',
      'parentId': '0',
      'name': '站站查詢',
      'keyWord': 'tgl',
      'icon': 'fa-bus',
      'url': '/line-query'
    }
  ];
};
