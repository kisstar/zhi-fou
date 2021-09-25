<template>
  <form>
    <slot></slot>
    <div class="submit-area" @click.prevent="onSubmit">
      <slot name="footer">
        <button type="button" class="btn btn-primary">
          提交
        </button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from "vue";
import { getEmitter } from "@/lib/mitt";
import { ValidateFunction } from "@/types/interface";

export const formEmitter = getEmitter();

export default defineComponent({
  name: "ValidateForm",
  setup(props, context) {
    const vlidators: ValidateFunction[] = [];
    const onSubmit = () => {
      const result = vlidators.map(vlidator => vlidator()).every(Boolean);
      context.emit("submit", result);
    };
    const onFormItemCreated = (validator?: ValidateFunction) => {
      validator && vlidators.push(validator);
    };

    formEmitter.on("form-item-created", onFormItemCreated);
    onUnmounted(() => {
      formEmitter.off("form-item-created", onFormItemCreated);
      vlidators.length = 0;
    });

    return {
      onSubmit
    };
  }
});
</script>
