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
import { defineComponent } from "vue";

export default defineComponent({
  name: "ValidateForm",
  setup(props, context) {
    const onSubmit = () => {
      context.emit("submit", true);
    };

    return {
      onSubmit
    };
  }
});
</script>
