const fs = require("fs");
const path = require("path");

const useMiddlewares = require("./middlewares");

const mockDir = path.resolve(__dirname);
// 路由映射：{ post: { '/a/b/c': [Function], '/d/e': [Function] } }
const handlerMap = Object.create(null);

// 获取请求路径
const getURL = (dir, url, handlerMap) => {
  fs.readdirSync(dir).forEach(target => {
    const dirTarget = path.resolve(dir, target);
    const depDirTarget = `${url}/${target}`;

    // 如果是目录则深入处理
    if (fs.statSync(dirTarget).isDirectory()) {
      getURL(dirTarget, depDirTarget, handlerMap);
      return;
    }

    handlerMap[depDirTarget.replace(".js", "")] = require(dirTarget);
  });
};

fs.readdirSync(mockDir).forEach(dirname => {
  const dirTarget = path.resolve(mockDir, dirname);

  // 只处理特定的请求方法
  if (!["get", "post"].includes(dirname)) {
    return;
  }

  // 只处理与请求方法同名的目录
  if (!fs.statSync(dirTarget).isDirectory()) {
    return;
  }

  handlerMap[dirname] = handlerMap[dirname] || {};

  getURL(dirTarget, "", handlerMap[dirname]);
});

module.exports = app => {
  // 添加中间件
  useMiddlewares(app);

  // 添加路由
  Object.keys(handlerMap).forEach(method => {
    const routes = handlerMap[method];

    Object.keys(routes).forEach(url => {
      app[method](url, routes[url]);
    });
  });
};
