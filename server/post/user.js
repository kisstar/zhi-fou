const { userStore, emailMap } = require("../store");
const { NO_ERROR, USER_EXIST } = require("../config/error-code");

module.exports = (req, res) => {
  const { email, password, nickName } = req.body;

  // 用户已存在
  if (userStore[email]) {
    res.status(400);
    res.json({
      code: USER_EXIST,
      message: "用户已存在"
    });
    return;
  }

  // 存储邮箱，以便在创建用户时拿到昵称
  emailMap[email] = nickName;
  // 存储密码
  userStore[email] = password;

  res.json({
    code: NO_ERROR,
    message: "注册成功"
  });
};
