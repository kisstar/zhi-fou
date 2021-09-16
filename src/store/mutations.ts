import router from "@/router";
import request from "@/api";
import { AppState, PostInfo, ColumnProps } from "@/types/interface";

export default {
  // 获取凭证
  login(state: AppState, newToken: string) {
    const { path } = router.currentRoute.value.params;

    state.token = newToken;
    state.user.isLogin = !!newToken;
    localStorage.setItem("token", newToken);
    request.defaults.headers.common.Authorization = `Bearer ${newToken}`;
    router.push(typeof path == "string" ? path : "/");
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
