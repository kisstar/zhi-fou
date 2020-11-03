<template>
  <div class="container-fluid d-flex flex-column px-0">
    <global-header :user="currentUser" />
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

    return {
      currentUser
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
