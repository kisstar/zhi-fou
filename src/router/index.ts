import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import routes from "./routes";

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes
});

router.beforeEach((to, from, next) => {
  const { isLogin } = store.state.user;
  const { requiredLogin, redirectAlreadyLogin } = to.meta;

  if (!isLogin) {
    if (requiredLogin) {
      next({ name: "login" });
    } else {
      next();
    }

    return;
  }

  if (redirectAlreadyLogin) {
    next({ name: "/" });
  } else {
    next();
  }
});

export default router;
