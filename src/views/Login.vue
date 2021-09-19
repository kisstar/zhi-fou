<template>
  <div class="login-page">
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import ValidateForm from "../components/form/ValidateForm.vue";
import ValidateInput from "../components/form/ValidateInput.vue";
import { RuleInfo } from "@/types/interface";

const emailRules: RuleInfo[] = [
  { type: "required", message: "电子邮箱地址不能为空" },
  { type: "email", message: "请输入正确的电子邮箱格式" }
];
const passwordRules: RuleInfo[] = [
  { type: "required", message: "密码不能为空" }
];

export default defineComponent({
  name: "Login",
  components: {
    ValidateForm,
    ValidateInput
  },
  setup() {
    const store = useStore();
    const emailValue = ref("");
    const passwordValue = ref("");
    const onSubmit = (isPassed: boolean) => {
      if (!isPassed) {
        return;
      }

      store
        .dispatch("login", {
          email: emailValue.value,
          password: passwordValue.value
        })
        .then(() => {
          store.dispatch("getUserInfo");
        });
    };

    return {
      emailValue,
      emailRules,
      passwordValue,
      passwordRules,
      onSubmit
    };
  }
});
</script>
