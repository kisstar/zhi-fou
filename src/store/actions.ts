import { ActionContext } from "vuex";
import { getColumn, getColumns, getPosts } from "@/api/columns";
import { AppState } from "@/types/interface";

export default {
  // 获取专栏列表
  async getColumns({ commit }: ActionContext<AppState, AppState>) {
    const { data } = await getColumns();
    const { data: list } = data;

    commit("setColumns", list);
  },
  // 获取指定专栏的信息
  async getColumn({ commit }: ActionContext<AppState, AppState>, cid: number) {
    const { data } = await getColumn(cid);
    const { data: info } = data;

    commit("setCurrentColumn", info);
  },
  // 获取文章列表
  async getPosts({ commit }: ActionContext<AppState, AppState>, cid: number) {
    const { data } = await getPosts(cid);
    const { data: list } = data;

    commit("setPosts", list);
  }
};
