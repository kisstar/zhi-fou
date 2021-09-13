// 用户信息映射表
exports.userMap = Object.create(null);

// 用户账号密码映射表
const userStore = (exports.userStore = Object.create(null));

Object.assign(userStore, {
  "test@163.com": "123456"
});
