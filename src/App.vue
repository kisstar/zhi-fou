<template>
  <div class="container">
    <global-header :user="currentUser" />
    <form>
      <div class="mb-3">
        <label for="emailAddress" class="form-label">邮箱地址</label>
        <input
          id="emailAddress"
          class="form-control"
          type="email"
          v-model="emailRef.value"
          @blur="validateEmail"
        />
        <div
          v-show="emailRef.error"
          class="form-text"
          v-text="emailRef.message"
        />
      </div>
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
import { defineComponent, reactive } from "vue";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
import { ColumnProps } from "./components/ColumnList.vue";

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
    GlobalHeader
  },
  setup() {
    const rEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailRef = reactive({
      value: "",
      message: "",
      error: false
    });
    const validateEmail = () => {
      const value = emailRef.value;

      if (!value.trim()) {
        emailRef.error = true;
        emailRef.message = "电子邮箱地址不能为空";
      } else if (!rEmail.test(value)) {
        emailRef.error = true;
        emailRef.message = "请输入正确的电子邮箱格式";
      }
    };

    return {
      emailRef,
      validateEmail,
      currentUser,
      list: testData
    };
  }
});
</script>
