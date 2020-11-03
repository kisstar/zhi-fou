<template>
  <div class="container">
    <global-header :user="currentUser" />
    <form>
      <validate-input
        name="emailAddress"
        label="邮箱地址"
        :rules="emailRules"
      />
      <div class="mb-3">
        <label for="password" class="form-label">密码</label>
        <input
          id="password"
          class="form-control"
          type="password"
          autocomplete
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
import { ColumnProps } from "./components/ColumnList.vue";
import ValidateInput, { RuleProps } from "./components/ValidateInput.vue";

const emailRules: RuleProps = [
  { type: "required", message: "电子邮箱地址不能为空" },
  { type: "email", message: "请输入正确的电子邮箱格式" }
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
    ValidateInput
  },
  setup() {
    return {
      emailRules,
      currentUser,
      list: testData
    };
  }
});
</script>
