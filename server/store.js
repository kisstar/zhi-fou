const { randomString } = require("./helper");

// 用户唯一标识
let uid = 0;
// 专栏唯一标识
let columnId = 0;

// 由于 userID 是递增的，如果创建用户是在注册时，则登录时是无法通过 userID 关联的
// 所幸，用户的邮箱总是一致的，所以我们将利用用户邮箱映射表来进行记录
// 现在，我们将用户信息的创建都移步在登录时，以便通过 userID 来进行对应
const emailMap = (exports.emailMap = Object.create(null));

// 用户信息映射表
const userMap = (exports.userMap = Object.create(null));

// 用户账号密码映射表
const userStore = (exports.userStore = Object.create(null));

Object.assign(userStore, {
  "test@163.com": "123456"
});

const createUser = (exports.createUser = ({ email, nickName }) => {
  const userInfo = {
    id: uid,
    columnId: columnId++,
    avatar: "https://thiscatdoesnotexist.com/",
    email,
    nickName: nickName || emailMap[email] || randomString(6),
    des: `我是第${uid}个被创建的用户`
  };

  userMap[email] = userMap[uid] = userInfo;
  uid++;

  return userInfo;
});

// 由于注册的账号是存在内存中的（包括用户信息），下次启动时端上可能存在登录态，但是用户信息已经丢失
// 所以，在没有用户信息时将自动创建（这不不是最好的处理方式，但我们的重点不在于此）
exports.getUser = userID => {
  return (
    userMap[userID] ||
    createUser({ email: "kisstar@163.com", nickName: "kisstar" })
  );
};
