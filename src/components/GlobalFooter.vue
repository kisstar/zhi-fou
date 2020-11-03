<template>
  <footer class="mt-auto py-4 text-center text-secondary bg-light">
    <small>
      <ul class="list-inline mb-0">
        <li class="list-inline-item">© 2020 知乎专栏</li>
        <li class="list-inline-item">
          <a href="https://www.cnblogs.com/dongwanhong/" target="_blank"
            >Kisstar</a
          >
        </li>
        <li class="list-inline-item">
          <a href="https://github.com/kisstar/" target="_blank">GitHub</a>
        </li>
        <li class="list-inline-item">文档</li>
        <li class="list-inline-item">联系</li>
        <li class="list-inline-item">更多</li>
      </ul>
    </small>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GlobalFooter"
});
</script>
