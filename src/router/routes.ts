import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import ColumnDetail from "@/views/ColumnDetail.vue";
import CreatePost from "@/views/CreatePost.vue";

export default [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/column/:id",
    name: "column",
    component: ColumnDetail
  },
  {
    path: "/create",
    name: "create",
    component: CreatePost
  }
];
