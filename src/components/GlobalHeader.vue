<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <router-link class="navbar-brand" to="/">
      知否专栏
    </router-link>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <router-link to="/login" class="btn btn-outline-light my-2">
          登录
        </router-link>
      </li>
      <li class="list-inline-item">
        <router-link to="/register" class="btn btn-outline-light my-2">
          注册
        </router-link>
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <a href="#" class="btn btn-outline-light my-2">
          <dropdown :title="`您好，${user.name}`">
            <dropdown-item>
              <router-link to="/create">
                新建文章
              </router-link>
            </dropdown-item>
            <dropdown-item :disabled="true">编辑资料</dropdown-item>
            <dropdown-item>退出登陆</dropdown-item>
          </dropdown>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Dropdown from "./Dropdown.vue";
import DropdownItem from "./DropdownItem.vue";
import { UserProps } from "@/types/interface";

export default defineComponent({
  name: "GlobalHeader",
  components: {
    Dropdown,
    DropdownItem
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  }
});
</script>
