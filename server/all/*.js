const { authLiveTime } = require("../config");
const authRoutes = require("../config/auth-routes");
const { NOT_LOGIN } = require("../config/error-code");

/**
 * @description
 * 登录态和权限校验
 */
function verificationAuthority(req, res, next) {
  const failData = {
    code: NOT_LOGIN,
    message: "请先登录"
  };

  const { authTime } = req;

  if (!authTime || Date.now() - authTime > authLiveTime) {
    res.status(403);
    res.json(failData);
  } else {
    next();
  }
}

/**
 * @description
 * 解析校验信息和用户标识的中间件
 */
function authInfo(req) {
  const { authorization = "" } = req.headers;

  const authStr = authorization.slice(7);
  const authTime = +authStr.slice(0, 13);
  const userID = +authStr.slice(-1);

  req.authTime = authTime;
  req.userID = userID;
}

module.exports = (req, res, next) => {
  const routes = authRoutes[req.method.toLowerCase()] || [];

  authInfo(req, res, next);

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];

    if (typeof route === "string" && req.path === route) {
      verificationAuthority(req, res, next);
      return;
    }

    if (
      Object.prototype.toString.call(route) === "[object RegExp]" &&
      route.test(req.path)
    ) {
      verificationAuthority(req, res, next);
      return;
    }
  }

  next();
};
