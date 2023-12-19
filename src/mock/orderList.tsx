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
/*
  TODO 
  定义 mock 文件结构 Page 列表。  使用 ts 来定义文档的结构
  然后请求和 axios 的请求结构。
  用户登录的情况，跨域请求处理后续=-====如何对接。。
  利用 json-server 这个服务来发起

  同时。完成订单列表和文件上传下载的使用回显预览封装等操作。
  TODO 
  查看最新的 antd 版本 实现表单新增删除的控制，数据的获取 是如何实现的。
  TODO
  数据可视化实现。学习看视频 实现 echarts 的首页，同时展示数据，实现进入之后重定向到 home 页面
*/
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