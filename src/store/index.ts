import { createStore } from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import { AppState } from "@/types/interface";

const token = localStorage.getItem("token") || "";

const store = createStore<AppState>({
  state: {
    // 错误信息
    error: {
      status: false
    },
    // 登录凭证
    token,
    // 当前是否有接口在加载
    loading: false,
    // 用户信息
    user: {
      isLogin: !!token
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
