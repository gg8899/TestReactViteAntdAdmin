import type { MockMethod } from 'vite-plugin-mock';
import { mock } from 'mockjs'
const arr: any = [];
for (let index = 0; index < 20; index++) {
  arr.push({
    name: 'wade',
    age: '登录成功',
    address: 'Windows 10',
    browser: 'Chrome(99.0.4844.51)',
    ip: '192.168.9.110',
    address2: '2021-12-14 10:41:02',
    address3: '局域网 局域网',
  });
}

const logList = {
  total: 31,
  page: 1,
  page_size: 20,
  list: arr,
};

const statusList = {
  data: [
    { label: '全部', value: 0 },
    { label: '待审核', value: 1 },
  ],
};
export default [
  {
    url: '/mock/api/getList',
    method: 'get',
    response: () => {
      return mock({
        "list|10-20": [
          {
            name: '@cname',
            age: '@integer(1,99)',
            address: 'Windows 10',
            browser: 'Chrome(99.0.4844.51)',
            ip: '192.168.9.110',
            address2: '2021-12-14 10:41:02',
            address3: '局域网 局域网',
          }
        ]
      })
      // return logList;
    },
  },
  {
    url: '/mock/api/getStatusList',
    method: 'get',
    response: () => {
      return statusList;
    },
  },
] as MockMethod[];