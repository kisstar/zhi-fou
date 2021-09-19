<template>
  <li :class="{ 'dropdown-item': true, disabled }">
    <slot />
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DropdownItem",
  props: {
    disabled: {
      type: Boolean,
      require: true
    }
  }
});
</script>
