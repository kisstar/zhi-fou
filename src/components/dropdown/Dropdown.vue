<template>
  <div class="dropdown" ref="dropdownRef">
    <button
      class="btn dropdown-toggle"
      type="button"
      v-text="title"
      @click.prevent="toggleOpen"
    />
    <ul :class="{ 'dropdown-menu': true, show: isOpen }">
      <slot />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import useClickOutside from "@/hooks/useClickOutside";

export default defineComponent({
  name: "Dropdown",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const dropdownRef = ref<null | HTMLElement>(null);
    const isClickOutside = useClickOutside(dropdownRef);
    const isOpen = ref(false);
    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    };

    watch(isClickOutside, () => {
      if (isClickOutside.value && isOpen.value) {
        isOpen.value = false;
      }
    });

    return {
      isOpen,
      toggleOpen,
      dropdownRef
    };
  }
});
</script>
