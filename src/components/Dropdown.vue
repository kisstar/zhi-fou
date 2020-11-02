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
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

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

    const dropdownRef = ref<null | HTMLElement>(null);
    const handler = (event: MouseEvent) => {
      console.log("1", dropdownRef.value);
      console.log("2", event.target);

      if (!dropdownRef.value) {
        return;
      }
      if (
        !dropdownRef.value.contains(event.target as HTMLElement) &&
        isOpen.value
      ) {
        isOpen.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener("click", handler);
    });

    onUnmounted(() => {
      document.removeEventListener("click", handler);
    });

    return {
      isOpen,
      toggleOpen,
      dropdownRef
    };
  }
});
</script>
