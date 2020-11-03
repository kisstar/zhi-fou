<template>
  <div class="mb-3">
    <label :for="name" class="form-label" v-text="label" />
    <input
      :id="name"
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      type="email"
      v-model="inputRef.value"
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
import { defineComponent, PropType, reactive } from "vue";

export interface RuleInfo {
  type: "required" | "email";
  message: string;
}

export type RuleProps = RuleInfo[];

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
    rules: {
      type: Array as PropType<RuleProps>,
      default: []
    }
  },
  setup(props) {
    const rEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const inputRef = reactive({
      value: "",
      message: "",
      error: false
    });
    const validator = () => {
      const value = inputRef.value;
      const isPassed = props.rules.every(rule => {
        inputRef.message = rule.message;

        switch (rule.type) {
          case "required":
            return !!value.trim();
          case "email":
            return rEmail.test(value);
          default:
            return false;
        }
      });

      inputRef.error = !isPassed;
      return isPassed;
    };

    return {
      inputRef,
      validator
    };
  }
});
</script>
