const { userStore } = require("../store");

module.exports = (req, res) => {
  const { email, password } = req.body;

  // 用户不存在或密码不正确
  if (!userStore[email] || userStore[email] !== password) {
    res.status(403);
    res.json({
      code: 403,
      message: "用户或密码错误"
    });
    return;
  }

  res.json({
    code: 200,
    data: Date.now()
  });
};
