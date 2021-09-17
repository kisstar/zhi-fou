const { authLiveTime } = require("../config");
const authRoutes = require("../config/auth-routes");
const { NOT_LOGIN } = require("../config/error-code");

/**
 * @description
 * 登录态和权限校验
 */
function verificationAuthority(req, res, next) {
  const { authorization = "" } = req.headers;
  const failData = {
    code: NOT_LOGIN,
    message: "请先登录"
  };
  const authTime = +authorization.slice(7);

  if (!authTime || Date.now() - authTime > authLiveTime) {
    res.status(403);
    res.json(failData);
  } else {
    next();
  }
}

module.exports = (req, res, next) => {
  const routes = authRoutes[req.method.toLowerCase()] || [];

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
