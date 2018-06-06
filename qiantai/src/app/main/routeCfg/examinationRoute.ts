import {User} from '../../business/home/home.component';

const show = true;

export const examinationRoute = (user: User) => {
  let children = [];
  if (user.userName === 'admin') {
    children = [{
      'id': '38',
      'parentId': '37',
      'name': '科目管理',
      'keyWord': 'tg',
      'icon': 'fa-dashboard',
      'url': '/app/examination/exam-subject',
    }, {
      'id': '38',
      'parentId': '37',
      'name': '考点管理',
      'keyWord': 'tg',
      'icon': 'fa-dashboard',
      'url': '/app/examination/exam-location'
    }, {
      'id': '39',
      'parentId': '37',
      'name': '考场管理',
      'keyWord': 'tg',
      'icon': 'fa-dashboard',
      'url': '/app/examination/examination-venue'
    }, /*{
      'id': '40',
      'parentId': '37',
      'name': '准考证管理',
      'keyWord': 'tg',
      'icon': 'fa-dashboard',
      'url': '/app/examination/admission-ticket'
    },*/ {
      'id': '42',
      'parentId': '37',
      'name': '考试编排',
      'keyWord': 'tg',
      'icon': 'fa-dashboard',
      'url': '/app/examination/examination-choreography'
    }, {
      'id': '43',
      'parentId': '37',
      'name': '报名信息管理',
      'keyWord': 'tg',
      'icon': 'fa-dashboard',
      'url': '/app/examination/register-info-manage'
    }];
  } else if (user.userType === '考生') {
    children = [{
      'id': '41',
      'parentId': '37',
      'name': '报名管理',
      'keyWord': 'tg',
      'icon': 'fa-dashboard',
      'url': '/app/examination/candidate-registration'
    }];
  }
  return [
    {

      'id': '37',
      'parentId': '0',
      'name': '考试管理',
      'keyWord': 'tgl',
      'icon': 'fa-cube',
      'children': [...children]
    }
  ];
};
