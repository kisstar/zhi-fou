<template>
  <form>
    <slot></slot>
    <slot name="footer">
      <button type="submit" class="btn btn-primary" @click="onSubmit">
        提交
      </button>
    </slot>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from "vue";
import { getEmitter } from "@/lib/mitt";

export const formEmitter = getEmitter();

export default defineComponent({
  name: "ValidateForm",
  setup(props, context) {
    const onSubmit = () => {
      context.emit("submit", true);
    };
    const onFormItemCreated = (test?: string) => {
      console.log(test);
    };

    formEmitter.on("form-item-created", onFormItemCreated);
    onUnmounted(() => {
      formEmitter.off("form-item-created", onFormItemCreated);
    });

    return {
      onSubmit
    };
  }
});
</script>
