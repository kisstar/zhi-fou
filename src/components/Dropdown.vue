<template>
  <div class="dropdown">
    <button
      class="btn dropdown-toggle"
      type="button"
      v-text="title"
      @click="toggleOpen"
    />
    <ul :class="{ 'dropdown-menu': true, show: isOpen }">
      <slot />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Dropdown",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const isOpen = ref(false);
    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      toggleOpen
    };
  }
});
</script>
