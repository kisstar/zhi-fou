import { createStore } from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import { AppState } from "@/types/interface";

const store = createStore<AppState>({
  state: {
    // 用户信息
    user: {
      isLogin: false
    },
    columnList: [], // 专栏列表
    currentColumn: null, // 当前显示的专栏
    postList: [] // 当前专栏对应的文章列表
  },
  getters: {},
  mutations,
  actions
});

export default store;
