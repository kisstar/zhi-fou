const { userStore, userMap, createUser } = require("../store");
const { NO_ERROR, PASSWORD_ERROR } = require("../config/error-code");

module.exports = (req, res) => {
  const { email, password } = req.body;

  // 用户不存在或密码不正确
  if (!userStore[email] || userStore[email] !== password) {
    res.status(403);
    res.json({
      code: PASSWORD_ERROR,
      message: "用户或密码错误"
    });
    return;
  }

  const { userID } = req;
  // 获取或创建用户信息
  const userInfo = userMap[userID] || createUser({ email });

  res.json({
    code: NO_ERROR,
    data: Date.now() + "" + userInfo.id
  });
};
