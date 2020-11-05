<template>
  <div class="create-post-page">
    <h4>新建文章</h4>
    <validate-form @submit="onSubmit">
      <validate-input
        label="文章标题"
        placeholder="请输入文章标题"
        type="text"
        v-model="titleVal"
        :rules="titleRules"
      />
      <validate-input
        label="文章详情"
        placeholder="请输入文章详情"
        type="text"
        tag="textarea"
        rows="10"
        v-model="contentVal"
        :rules="contentRules"
      />
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import ValidateForm from "../components/ValidateForm.vue";
import ValidateInput from "../components/ValidateInput.vue";
import { AppState, RuleInfo, PostInfo } from "@/types/interface";

export default defineComponent({
  name: "CreatePost",
  components: {
    ValidateInput,
    ValidateForm
  },
  setup() {
    const router = useRouter();
    const store = useStore<AppState>();
    const titleRules: RuleInfo[] = [
      { type: "required", message: "文章标题不能为空" }
    ];
    const contentRules: RuleInfo[] = [
      { type: "required", message: "文章详情不能为空" }
    ];
    const titleVal = ref("");
    const contentVal = ref("");
    const onSubmit = (isPassed: boolean) => {
      const { columnId } = store.state.user;

      if (isPassed && columnId) {
        const newPost: PostInfo = {
          id: new Date().getTime(),
          title: titleVal.value,
          content: contentVal.value,
          columnId,
          createdAt: new Date().toLocaleString()
        };

        store.commit("createPost", newPost);
        router.push({ name: "column", params: { id: columnId } });
      }
    };

    return {
      titleVal,
      titleRules,
      contentVal,
      contentRules,
      onSubmit
    };
  }
});
</script>
