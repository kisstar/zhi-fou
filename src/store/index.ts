import { createStore } from "vuex";
import { columnList, postList } from "../views/dataSource";
import mutations from "./mutations";
import { AppState } from "@/types/interface";

const store = createStore<AppState>({
  state: {
    user: {
      isLogin: false
    },
    columnList,
    postList
  },
  mutations
});

export default store;
