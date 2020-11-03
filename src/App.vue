<template>
  <div class="container-fluid d-flex flex-column px-0">
    <global-header :user="currentUser" />
    <validate-form @submit="onSubmit">
      <validate-input
        name="emailAddress"
        label="邮箱地址"
        type="email"
        placeholder="请输入邮箱地址"
        :rules="emailRules"
        v-model="emailValue"
      />
      <validate-input
        name="password"
        label="密码"
        type="password"
        placeholder="请输入密码"
        autocomplete
        :rules="passwordRules"
        v-model="passwordValue"
      />
    </validate-form>
    <global-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
import GlobalFooter from "./components/GlobalFooter.vue";
import { ColumnProps } from "./components/ColumnList.vue";
import ValidateForm from "./components/ValidateForm.vue";
import ValidateInput, { RuleProps } from "./components/ValidateInput.vue";

const emailRules: RuleProps = [
  { type: "required", message: "电子邮箱地址不能为空" },
  { type: "email", message: "请输入正确的电子邮箱格式" }
];
const passwordRules: RuleProps = [
  { type: "required", message: "密码不能为空" }
];
const currentUser: UserProps = {
  id: 1,
  name: "Kisstar",
  isLogin: true
};
const testData: ColumnProps[] = Array(5)
  .fill(null)
  .map((_, index) => ({
    id: index,
    title: `test${index}的标题`,
    avatar: index === 3 ? "" : "http://www.dmoe.cc/random.php",
    description: `这是test${index}的专栏，有一段非常有意思的简介，欢迎阅读和编辑哦`
  }));

export default defineComponent({
  name: "App",
  components: {
    GlobalHeader,
    GlobalFooter,
    ValidateForm,
    ValidateInput
  },
  setup() {
    const emailValue = ref("");
    const passwordValue = ref("");
    const onSubmit = (isPassed: boolean) => {
      console.log("result", isPassed);
    };

    return {
      emailValue,
      emailRules,
      passwordValue,
      passwordRules,
      onSubmit,
      currentUser,
      list: testData
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
