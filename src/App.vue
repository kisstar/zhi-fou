<template>
  <div class="container-fluid d-flex flex-column px-0">
    <global-header :user="currentUser" />
    <router-view />
    <global-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
import GlobalFooter from "./components/GlobalFooter.vue";

const currentUser: UserProps = {
  id: 1,
  name: "Kisstar",
  isLogin: false
};

export default defineComponent({
  name: "App",
  components: {
    GlobalHeader,
    GlobalFooter
  },
  setup() {
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
