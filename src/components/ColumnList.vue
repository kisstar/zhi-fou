<template>
  <div class="row">
    <div class="col-4 mb-3" v-for="column in resultList" :key="column.id">
      <div class="card shadow-sm">
        <div class="card-body text-center">
          <img
            class="my-3 rounded-circle"
            :src="column.avatar"
            :alt="column.title"
            width="50"
            height="50"
          />
          <h5 class="card-title text-truncate" v-text="column.title"></h5>
          <p
            class="card-text text-left text-secondary"
            v-text="column.description"
          ></p>
          <router-link
            class="btn btn-outline-primary"
            :to="`/column/${column.id}`"
          >
            进入专栏
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from "vue";

export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

export default defineComponent({
  name: "ColumnList",
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup(props) {
    const resultList = computed(() => {
      return props.list.map(item => {
        if (!item.avatar) {
          item.avatar = require("@/assets/images/column-avatar.jpg");
        }
        return item;
      });
    });

    return {
      resultList
    };
  }
});
</script>
