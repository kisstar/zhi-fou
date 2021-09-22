<template>
  <div class="container-fluid d-flex flex-column px-0">
    <global-header :user="currentUser" />
    <loader v-if="isLoading">Loading</loader>
    <router-view />
    <global-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from "vue";
import { useStore } from "vuex";
import GlobalHeader from "./components/GlobalHeader.vue";
import GlobalFooter from "./components/GlobalFooter.vue";
import Loader from "./components/Loader.vue";
import { AppState } from "@/types/interface";
import message from "./components/message/message";

export default defineComponent({
  name: "App",
  components: {
    GlobalHeader,
    GlobalFooter,
    Loader
  },
  setup() {
    const store = useStore<AppState>();
    const currentUser = computed(() => store.state.user);
    const isLoading = computed(() => store.state.loading);
    const error = computed(() => store.state.error);

    watch(
      () => error.value.status,
      () => {
        if (error.value.status && error.value.message) {
          message.error({ message: error.value.message });
        }
      }
    );

    return {
      currentUser,
      isLoading
    };
  }
});
</script>

<style lang="scss">
html,
body,
#app,
.container-fluid {
  min-height: 100vh;
}
</style>
