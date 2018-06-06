const show = false;

export const roleRoute = show ? [
  {
    'id': '020',
    'parentId': '0',
    'name': '样式示例',
    'keyWord': 'yssl',
    'icon': 'fa-cubes',
    'isExpend': false,
    'children': [
      {
        'id': '021',
        'parentId': '020',
        'name': 'ng-bootstrap样式',
        'keyWord': 'ngBootstrapDemo',
        'icon': 'fa-cubes',
        'url': '/app/demo/ngBootstrapDemo'
      }, {
        'id': '022',
        'parentId': '020',
        'name': 'bootstrap样式',
        'keyWord': 'bootstrapDemo',
        'icon': 'fa-cubes',
        'url': '/app/demo/bootstrapDemo'
      },
      {
        'id': '023',
        'parentId': '020',
        'name': '时间轴样式',
        'keyWord': 'timeline',
        'icon': 'fa-clock-o',
        'url': '/app/demo/timelineDemo'
      }
    ]
  },
  {
    'id': '20',
    'parentId': '0',
    'name': '权限管理',
    'keyWord': 'qxgl',
    'icon': 'fa-user',
    'isExpend': false,
    'children': [{
      'id': '21',
      'parentId': '20',
      'name': '用户管理',
      'keyWord': 'yhgl',
      'icon': 'fa-user-circle-o',
      'isExpend': false,
      'children': [
        {
          'id': '22',
          'parentId': '21',
          'name': '用户添加',
          'keyWord': 'yhtj',
          'icon': 'fa-pencil-square-o',
          'url': '/app/user/userAdd'
        },
        {
          'id': '23',
          'parentId': '21',
          'name': '用户列表',
          'keyWord': 'yhlb',
          'icon': 'fa-list-alt',
          'url': '/app/user/userList'
        }]
    },
      {
        'id': '24',
        'parentId': '20',
        'name': '角色管理',
        'keyWord': 'jsgl',
        'icon': 'fa-users',
        'children': [{
          'id': '25',
          'parentId': '24',
          'name': '角色添加',
          'keyWord': 'jstj',
          'icon': 'fa-plus-circle',
          'url': '/app/role/roleAdd'
        }, {
          'id': '26',
          'parentId': '24',
          'name': '角色查询',
          'keyWord': 'jscx',
          'icon': 'fa-search',
          'url': '/app/role/roleList'
        }, {
          'id': '27',
          'parentId': '24',
          'name': '角色分配',
          'keyWord': 'jsfp',
          'icon': 'fa-cogs',
          'url': '/app/role/roleDistribute'
        }]
      },
      {
        'id': '28',
        'parentId': '20',
        'name': '菜单管理',
        'keyWord': 'cdgl',
        'icon': 'fa-tree',
        'children': [{
          'id': '29',
          'parentId': '28',
          'name': '菜单添加',
          'keyWord': 'cdtj',
          'icon': 'fa-plus-circle',
          'url': '/app/menu/menuAdd'
        }, {
          'id': '30',
          'parentId': '28',
          'name': '菜单查询',
          'keyWord': 'cdcx',
          'icon': 'fa-search',
          'url': '/app/menu/menuList'
        }]
      }
    ]
  },
  {
    'id': '31',
    'parentId': '0',
    'name': '系统管理',
    'keyWord': 'xtgl',
    'icon': 'fa-cube',
    'children': [{
      'id': '32',
      'parentId': '31',
      'name': '系统监控',
      'keyWord': 'txjk',
      'icon': 'fa-dashboard',
      'url': '/app/sysMonitor'
    }, {
      'id': '33',
      'parentId': '31',
      'name': '系统日志',
      'keyWord': 'txrz',
      'icon': 'fa-sticky-note',
      'url': '/app/sysLog'
    }]
  }
] : [];
