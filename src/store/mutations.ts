import { AppState, PostInfo, ColumnProps } from "@/types/interface";

export default {
  login(state: AppState) {
    state.user = { ...state, isLogin: true, name: "Kisstar" };
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
  setLoading(state: AppState, isLoading: boolean) {
    state.loading = isLoading;
  }
};
