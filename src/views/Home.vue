<template>
  <div class="home-page container">
    <section class="py-5 text-center">
      <div class="row">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="../assets/svgs/callout.svg" alt="callout" class="w-50" />
          <h2 class="font-weight-light">随心写作，自由表达</h2>
          <p>
            <a href="#" class="btn btn-primary my-2">开始写文章</a>
          </p>
        </div>
      </div>
    </section>
    <section class="pb-5">
      <h4 class="mb-4 text-center font-weight-bold">发现精彩</h4>
      <column-list :list="list"></column-list>
      <button class="btn btn-block btn-outline-primary mt-2 mb-5 mx-auto w-25">
        加载更多
      </button>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ColumnList from "../components/ColumnList.vue";
import { columnList } from "./dataSource";

export default defineComponent({
  name: "Home",
  components: {
    ColumnList
  },
  setup() {
    return { list: columnList };
  }
});
</script>
