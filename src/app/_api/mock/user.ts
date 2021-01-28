import { IWorkItem } from '@store/user';

export const login = {
  msg: 'Hello',
  success: true,
  token: 'admin-token',
  tokenID: 1
};


export const works: IWorkItem[] = [
  {
    name: '任务1',
    start: new Date('2021/01/23').getTime(),
    end: new Date('2021/01/25').getTime(),
    partners: [ 'user001', 'user002' ],
    schedule: [
      { time: new Date('2021/01/24').getTime(), msg: '在做了在做了，指：新建文件夹', workers: [ 'user001' ] },
      { time: new Date('2021/01/25').getTime(), msg: '做不了，打扰了', workers: [ 'user001', 'user002' ] },
    ],
    status: 'fail',
  },
  {
    name: '任务2',
    start: new Date('2021/01/21').getTime(),
    end: new Date('2021/01/28').getTime(),
    partners: [ 'user001', 'user002', 'user003' ],
    schedule: [ { time: new Date('2021/01/24').getTime(), msg: '初步调试完成', workers: [ 'user001', 'user003' ] } ],
    status: 'process'
  },
  {
    name: '任务3',
    start: new Date('2021/01/15').getTime(),
    end: new Date('2021/01/23').getTime(),
    partners: [ 'user001', 'user002', 'user003' ],
    schedule: [
      { time: new Date('2021/01/17').getTime(), msg: '编写文档', workers: [ 'user001'] },
      { time: new Date('2021/01/19').getTime(), msg: '完成开发', workers: [ 'user002', 'user003' ] },
      { time: new Date('2021/01/20').getTime(), msg: '测试完成', workers: [ 'user002', 'user003' ] },
      { time: new Date('2021/01/23').getTime(), msg: '完成任务', workers: [ 'user001', 'user002', 'user003' ] },
    ],
    status: 'success'
  },
  {
    name: '任务4 例行维护',
    start: new Date('2021/01/27').getTime(),
    end: new Date('2021/01/28').getTime(),
    partners: [ 'user001', 'user002', 'user003' ],
    schedule: [],
    status: 'unplayed'
  },
  {
    name: '任务5 例行维护',
    start: new Date('2021/01/29').getTime(),
    end: new Date('2021/01/30').getTime(),
    partners: [ 'user001', 'user002', 'user003' ],
    schedule: [],
    status: 'unplayed'
  },
  {
    name: '任务10',
    start: new Date('2021/01/25').getTime(),
    end: new Date('2021/01/29').getTime(),
    partners: [ 'user001', 'user002', 'user003' ],
    schedule: [],
    status: 'unplayed'
  },
  {
    name: '任务6 例行维护',
    start: new Date('2021/01/22').getTime(),
    end: new Date('2021/01/24').getTime(),
    partners: [ 'user001', 'user002', 'user003' ],
    schedule: [],
    status: 'unplayed'
  },
  {
    name: '任务7 例行维护',
    start: new Date('2021/02/01').getTime(),
    end: new Date('2021/02/02').getTime(),
    partners: [ 'user001', 'user002', 'user003' ],
    schedule: [],
    status: 'unplayed'
  }
];
