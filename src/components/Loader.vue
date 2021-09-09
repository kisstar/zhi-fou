<template>
  <teleport :to="target_">
    <div
      class="loading-container position-fixed top-0 right-0 bottom-0 left-0 d-flex justify-content-center align-items-center"
      :style="{ backgroundColor: backgroundColor }"
    >
      <div class="loading-content text-primary">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">{{ text || "Loading..." }}</span>
        </div>
        <p v-if="text">{{ text }}</p>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, ref } from "vue";

// 加载器挂载点的唯一标识
let uid = 0;

function createEl() {
  const node = document.createElement("div");
  const id = `teleport-${uid++}`;

  node.id = id;
  document.body.appendChild(node);

  return {
    target: id,
    unmountFn: () => {
      document.body.removeChild(node);
    }
  };
}

export default defineComponent({
  name: "Loader",
  props: {
    target: {
      type: String
    },
    text: {
      type: String
    },
    backgroundColor: {
      type: String
    }
  },
  setup(props) {
    const target = ref<string>((props.target && `#${props.target}`) || "");

    if (!target.value) {
      const { target: target_, unmountFn } = createEl();

      target.value = `#${target_}`;
      onUnmounted(unmountFn);
    }

    return {
      target_: target
    };
  }
});
</script>

<style lang="scss">
.loading-container {
  background-color: rgba($color: #000000, $alpha: 0.7);
  z-index: 9999;
}
</style>
