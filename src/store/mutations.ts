import { AppState } from "@/types/interface";

export default {
  login(state: AppState) {
    state.user = { ...state, isLogin: true, name: "Kisstar" };
  }
};
