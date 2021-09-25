<template>
  <div class="mb-3">
    <label :for="name" class="form-label" v-text="label" />
    <input
      v-if="tag !== 'textarea'"
      :id="name"
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      v-bind="$attrs"
      :value="inputRef.value"
      @input="updateValue"
      @blur="validator"
    />
    <textarea
      v-else
      :id="name"
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      v-bind="$attrs"
      :value="inputRef.value"
      @input="updateValue"
      @blur="validator"
    />
    <div
      v-show="inputRef.error"
      class="invalid-feedback"
      v-text="inputRef.message"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, reactive } from "vue";
import { formEmitter } from "./ValidateForm.vue";
import { RuleInfo, TagType } from "@/types/interface";

const rEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default defineComponent({
  name: "ValidateInput",
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    modelValue: String,
    rules: {
      type: Array as PropType<RuleInfo[]>,
      default: []
    },
    tag: {
      type: String as PropType<TagType>,
      default: "input"
    }
  },
  inheritAttrs: false,
  setup(props, context) {
    const inputRef = reactive({
      value: props.modelValue || "",
      message: "",
      error: false
    });
    const updateValue = (event: KeyboardEvent) => {
      const newValue = (inputRef.value = (event.target as HTMLInputElement).value);

      context.emit("update:modelValue", newValue);
    };
    const validator = () => {
      const value = inputRef.value;
      const isPassed = props.rules.every(rule => {
        inputRef.message = rule.message;

        switch (rule.type) {
          case "required":
            return !!value.trim();
          case "email":
            return rEmail.test(value);
          case "custom":
            return rule.validator ? rule.validator() : true;
          default:
            return false;
        }
      });

      inputRef.error = !isPassed;

      return isPassed;
    };

    onMounted(() => {
      formEmitter.emit("form-item-created", validator);
    });

    return {
      inputRef,
      updateValue,
      validator
    };
  }
});
</script>
