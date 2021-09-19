const { randomString } = require("./helper");

// 用户唯一标识
let uid = 0;
// 专栏唯一标识
let columnId = 0;

// 用户信息映射表
const userMap = (exports.userMap = Object.create(null));

// 用户账号密码映射表
const userStore = (exports.userStore = Object.create(null));

Object.assign(userStore, {
  "test@163.com": "123456"
});

exports.createUser = email => {
  const userInfo = {
    id: uid,
    columnId: columnId++,
    avatar: "https://thiscatdoesnotexist.com/",
    email,
    nickName: randomString(6),
    des: `我是第${uid}个被创建的用户`
  };

  userMap[uid] = userInfo;
  uid++;

  return userInfo;
};

exports.getUser = userID => {
  return userMap[userID];
};
