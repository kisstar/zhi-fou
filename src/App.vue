<template>
  <div class="container">
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ColumnList, { ColumnProps } from "./components/ColumnList.vue";

const testData: ColumnProps[] = [
  {
    id: 1,
    title: "test1的标题",
    avatar: "http://www.dmoe.cc/random.php",
    description: "这是用来测试的专栏，有一段非常有意思的简介，欢迎阅读和编辑哦"
  }
];

export default defineComponent({
  name: "App",
  components: {
    ColumnList
  },
  setup() {
    return {
      list: testData
    };
  }
});
</script>
