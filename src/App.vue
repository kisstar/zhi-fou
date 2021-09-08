<template>
  <div class="container-fluid d-flex flex-column px-0">
    <global-header :user="currentUser" />
    <h1 v-if="isLoading">Loading</h1>
    <router-view />
    <global-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import GlobalHeader from "./components/GlobalHeader.vue";
import GlobalFooter from "./components/GlobalFooter.vue";
import { AppState } from "@/types/interface";

export default defineComponent({
  name: "App",
  components: {
    GlobalHeader,
    GlobalFooter
  },
  setup() {
    const store = useStore<AppState>();
    const currentUser = computed(() => store.state.user);
    const isLoading = computed(() => store.state.loading);

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
