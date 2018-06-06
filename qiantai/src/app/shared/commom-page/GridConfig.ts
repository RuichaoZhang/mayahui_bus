/**
 * Created by JetBrains WebStorm.
 * Author: yoon
 * Date: 18-4-26
 * Time: 下午8:30
 * Desc:
 */

export class GridConfig {
  columnName: string; //列名
  columnFiled: string; //列属性
  defaultValue?: string; //默认值
}

export class Action {
  name: string;
  click: any;
  show?: any = true
}

export class Option {
  name: string;
  click: any;
  show?: any = true
}
