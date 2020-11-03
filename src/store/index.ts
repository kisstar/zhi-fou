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
  getters: {
    getColumnById(state) {
      return (id: number) => state.columnList.find(item => item.id === id);
    },
    getPostByCid(state) {
      return (Cid: number) =>
        state.postList.filter(item => item.columnId === Cid);
    }
  },
  mutations
});

export default store;
