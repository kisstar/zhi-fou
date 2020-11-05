import { AppState, PostInfo } from "@/types/interface";

export default {
  login(state: AppState) {
    state.user = { ...state, isLogin: true, name: "Kisstar" };
  },
  createPost(state: AppState, newPost: PostInfo) {
    state.postList.push(newPost);
  }
};
