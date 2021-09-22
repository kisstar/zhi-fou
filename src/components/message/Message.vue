<template>
  <teleport to="#message">
    <div
      class="fixed-top d-flex justify-content-between mt-3 mx-auto w-50 alert"
      role="alert"
      :class="classObject"
      v-if="isVisible"
    >
      <span>{{ message }}</span>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        @click.prevent="handleClose"
      ></button>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import useDOMCreate from "@/hooks/useDOMCreate";
import { MessageType } from "@/types/interface";

export default defineComponent({
  props: {
    message: String,
    type: {
      type: String as PropType<MessageType>,
      default: "default"
    }
  },
  emits: ["close"],
  setup(props, context) {
    // 创建 teleport 组件的挂载点p
    useDOMCreate("message");

    const isVisible = ref(true);
    const classObject = {
      "alert-primary": props.type === "default",
      "alert-success": props.type === "success",
      "alert-danger": props.type === "error"
    };
    const handleClose = () => {
      isVisible.value = false;
      context.emit("close");
    };

    return {
      isVisible,
      classObject,
      handleClose
    };
  }
});
</script>
