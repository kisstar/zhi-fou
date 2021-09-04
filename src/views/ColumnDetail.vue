<template>
  <div class="column-detail-page w-75 mx-auto">
    <div
      class="column-info row mb-4 border-bottom pb-4 align-items-center"
      v-if="column"
    >
      <div class="col-3 text-center">
        <img
          :src="column.avatar"
          :alt="column.title"
          class="rounded-circle border w-100"
        />
      </div>
      <div class="col-9">
        <h4>{{ column.title }}</h4>
        <p class="text-muted">{{ column.description }}</p>
      </div>
    </div>
    <post-list :list="list"></post-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import PostList from "@/components/PostList.vue";
import { AppState } from "@/types/interface";

export default defineComponent({
  name: "ColumnDetail",
  components: {
    PostList
  },
  setup() {
    const route = useRoute();
    const store = useStore<AppState>();
    const currentId = +route.params.id;
    const currentColumn = computed(() =>
      store.getters.getColumnById(currentId)
    );
    const list = computed(() =>
      store.getters.getPostByCid(currentColumn.value.id)
    );

    store.dispatch("getPosts", currentId);

    return {
      column: currentColumn,
      list
    };
  }
});
</script>
