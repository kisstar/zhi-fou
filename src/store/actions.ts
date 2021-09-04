import { ActionContext } from "vuex";
import { getColumns, getPosts } from "@/api/columns";
import { AppState } from "@/types/interface";

export default {
  getColumns({ commit }: ActionContext<AppState, AppState>) {
    getColumns().then(res => {
      commit("setColumns", res.data);
    });
  },
  getPosts({ commit }: ActionContext<AppState, AppState>, cid: number) {
    getPosts(cid).then(res => {
      commit("setPosts", res.data);
    });
  }
};
