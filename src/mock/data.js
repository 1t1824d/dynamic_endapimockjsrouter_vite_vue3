/* 
***import.meta.glob('./data/*.json', { eager: true }) 同步引入多个文件
MockEndApiList  后端接口集合
*/
/*
 **Mockjs模块化使用示例
 */
let MockEndApiList = [];

const RequireDataModule = import.meta.glob("./data/*.json", { eager: true });
console.log(`RequireDataModule`, RequireDataModule, typeof RequireDataModule);
Object.entries(RequireDataModule).forEach(([fileKey, fileValue]) => {
  console.log(`fileKey,fileValue`, fileKey, fileValue);
  //if (fileKey === './index.js'||fileKey === './data.js') return;  // 过滤掉 index.js 、data.js 本身
  const MockEndApiName = fileKey.replace(/(\.\/data\/|\.json)/g, ""); // 获取模块名（去掉前后缀）
  console.log(`MockEndApiName`, MockEndApiName);
  MockEndApiList.push({
    MethodName: MockEndApiName,
    Data: fileValue.default.Data,
    MethodType: fileValue.default.MethodsType,
  });
});

console.log(` MockEndApiList`, MockEndApiList);
export default MockEndApiList;
