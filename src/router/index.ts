import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import routes from "./routes";

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes
});

router.beforeEach((to, from, next) => {
  const { user } = store.state;
  const { isLogin, id } = user;
  const { meta, path } = to;
  const { requiredLogin, redirectAlreadyLogin } = meta;

  if (isLogin) {
    redirectAlreadyLogin ? next({ name: "/" }) : next();
    // 本地存在登录态，但不存在用户信息时自动获取用户信息
    !id &&
      store.dispatch("getUserInfo").catch(() => {
        store.commit("logout");
      });
    return;
  }

  if (!requiredLogin) {
    next();
    return;
  }

  store.commit("logout");
  next({
    name: "login",
    params: {
      path
    }
  });
});

export default router;
