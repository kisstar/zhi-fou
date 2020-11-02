import { ref, Ref, onMounted, onUnmounted } from "vue";

const useClickOutside = (eleRef: Ref<HTMLElement | null>) => {
  const isClickOutside = ref(false);

  const handler = (event: MouseEvent) => {
    if (!eleRef.value) {
      return;
    }
    if (eleRef.value.contains(event.target as HTMLElement)) {
      isClickOutside.value = false;
    } else {
      isClickOutside.value = true;
    }
  };

  onMounted(() => {
    document.addEventListener("click", handler);
  });

  onUnmounted(() => {
    document.removeEventListener("click", handler);
  });

  return isClickOutside;
};

export default useClickOutside;
