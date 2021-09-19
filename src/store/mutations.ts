import router from "@/router";
import request from "@/api";
import {
  AppState,
  PostInfo,
  ColumnProps,
  UserProps,
  ErrorProps
} from "@/types/interface";

export default {
  // 设置错误信息
  setError(state: AppState, newError: ErrorProps) {
    state.error = newError;
  },
  // 获取凭证
  login(state: AppState, newToken: string) {
    const { path } = router.currentRoute.value.params;

    state.token = newToken;
    state.user.isLogin = !!newToken;
    localStorage.setItem("token", newToken);
    request.defaults.headers.common.Authorization = `Bearer ${newToken}`;
    router.push(typeof path == "string" ? path : "/");
  },
  logout(state: AppState) {
    state.user.isLogin = false;
    localStorage.removeItem("token");
  },
  // 设置用户信息
  setUserInfo(state: AppState, newUserInfo: Omit<UserProps, "isLogin">) {
    state.user = { ...state.user, ...newUserInfo };
  },
  // 设置当前专栏列表
  setColumns(state: AppState, newColumnList: ColumnProps[]) {
    state.columnList = newColumnList;
  },
  setCurrentColumn(state: AppState, newCurrentColumn: ColumnProps) {
    state.currentColumn = newCurrentColumn;
  },
  // 设置当前的文章列表
  setPosts(state: AppState, newPostList: PostInfo[]) {
    state.postList = newPostList;
  },
  createPost(state: AppState, newPost: PostInfo) {
    state.postList.push(newPost);
  },
  // 设置加载状态
  setLoading(state: AppState, isLoading: boolean) {
    state.loading = isLoading;
  }
};
