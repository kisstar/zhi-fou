<template>
  <div class="container">
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ColumnList, { ColumnProps } from "./components/ColumnList.vue";

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
    ColumnList
  },
  setup() {
    return {
      list: testData
    };
  }
});
</script>
