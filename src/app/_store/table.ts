import { IAction, Module, use } from './base';

const tool = use();
interface ITableState {
  [key: string]: Array<any>;
}

const tableState: ITableState = {
  table1Head: ['id', '姓名', '地址', '别名'],
  table1Data: [
    { id: 1, name: '张三', address: '湖南', alias: '法外狂徒' },
    { id: 2, name: '李四', address: '芜湖', alias: '李四真滴皮' },
    { id: 3, name: '马宝', address: '上海', alias: '武德先锋' },
    { id: 4, name: '王冰冰', address: '北京', alias: '她还是那么爱笑' },
    { id: 5, name: '孙笑川', address: '新津', alias: '带 恶 人' },
    { id: 6, name: '明凯', address: 'edg', alias: 'clearlove11' },
  ]
};


const tableAction: IAction = {

};

class TableModule extends Module<ITableState> {

  constructor() {
    super(tableState, tableAction);
  }


  public get table1Data(): Array<any> {
    return tableState.table1Data;
  }

  public get table1Head(): string[] {
    return tableState.table1Head;
  }
}

export const tableModule = new TableModule();
