<template>
  <div class="login-page m-auto mb-5">
    <h5 class="my-4 text-center">注册知否账户</h5>
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
        name="nickName"
        label="昵称"
        type="nickName"
        placeholder="请输入昵称"
        autocomplete
        :rules="nickNameRules"
        v-model="nickNameValue"
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
      <validate-input
        name="rePassword"
        label="重复密码"
        type="password"
        placeholder="请再次输入密码"
        autocomplete
        :rules="rePasswordRules"
        v-model="rePasswordValue"
      />
      <template #footer>
        <p @click.stop="toLogin">
          <router-link to="/login">
            <small>已经有账户了？去登录</small>
          </router-link>
        </p>
        <button type="button" class="btn btn-primary btn-block btn-large">
          注册新用户
        </button>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ValidateForm from "../components/form/ValidateForm.vue";
import ValidateInput from "../components/form/ValidateInput.vue";
import { RuleInfo } from "@/types/interface";
import { registerUser } from "@/api";
import { useRouter } from "vue-router";
import message from "@/components/message/message";

const emailRules: RuleInfo[] = [
  { type: "required", message: "电子邮箱地址不能为空" },
  { type: "email", message: "请输入正确的电子邮箱格式" }
];
const passwordRules: RuleInfo[] = [
  { type: "required", message: "密码不能为空" }
];
const nickNameRules: RuleInfo[] = [
  { type: "required", message: "昵称不能为空" }
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
    const nickNameValue = ref("");
    const passwordValue = ref("");
    const rePasswordValue = ref("");
    const rePasswordRules: RuleInfo[] = [
      { type: "required", message: "密码不一致" },
      {
        type: "custom",
        validator: () => passwordValue.value === rePasswordValue.value,
        message: "密码不一致"
      }
    ];
    const toLogin = () => {
      router.push({ path: "/login" });
    };
    const onSubmit = (isPassed: boolean) => {
      if (!isPassed) {
        return;
      }

      registerUser({
        email: emailValue.value,
        password: passwordValue.value,
        nickName: nickNameValue.value
      }).then(() => {
        message.success({ message: "登录成功，2秒后跳转至登录页面" });
        setTimeout(toLogin, 2000);
      });
    };

    return {
      emailValue,
      emailRules,
      passwordValue,
      passwordRules,
      nickNameValue,
      nickNameRules,
      rePasswordValue,
      rePasswordRules,
      toLogin,
      onSubmit
    };
  }
});
</script>

<style lang="scss">
.login-page {
  width: 80%;
  max-width: 350px;
}
</style>
