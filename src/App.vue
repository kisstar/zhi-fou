<template>
  <div class="container">
    <global-header :user="currentUser" />
    <column-list :list="list" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
import ColumnList, { ColumnProps } from "./components/ColumnList.vue";

const currentUser: UserProps = {
  id: 1,
  name: "Kisstar",
  isLogin: true
};
const testData: ColumnProps[] = Array(5)
  .fill(null)
  .map((_, index) => ({
    id: index,
    title: `test${index}的标题`,
    avatar: index === 3 ? "" : "http://www.dmoe.cc/random.php",
    description: `这是test${index}的专栏，有一段非常有意思的简介，欢迎阅读和编辑哦`
  }));

export default defineComponent({
  name: "App",
  components: {
    GlobalHeader,
    ColumnList
  },
  setup() {
    return {
      currentUser,
      list: testData
    };
  }
});
</script>
