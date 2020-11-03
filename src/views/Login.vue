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
import { useRouter } from "vue-router";
import ValidateForm from "../components/ValidateForm.vue";
import ValidateInput from "../components/ValidateInput.vue";
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
    const router = useRouter();
    const emailValue = ref("");
    const passwordValue = ref("");
    const onSubmit = (isPassed: boolean) => {
      console.log(isPassed);

      if (isPassed) {
        router.push({ name: "column", params: { id: 1 } });
      }
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
