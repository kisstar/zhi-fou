import { ActionContext } from "vuex";
import { login, getColumn, getColumns, getPosts } from "@/api/";
import { AppState } from "@/types/interface";
import { LoginParams } from "@/api/interface";

export default {
  // 登录
  async login(
    { commit }: ActionContext<AppState, AppState>,
    padyload: LoginParams
  ) {
    const { data } = await login(padyload);
    const { data: token } = data;

    commit("login", token);
  },
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
