import MockEndApiList from "./data";
import Mock from "mockjs";
console.log(`MockEndApiList`, MockEndApiList);
// 模拟接口数据
//Mock.mock('/api/user', 'get',user);
if (MockEndApiList.length) {
  MockEndApiList.map((item) => {
    Mock.mock(`/api/${item.MethodName}`, item.MethodType, item.Data);
  });
}
