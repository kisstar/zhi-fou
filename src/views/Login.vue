<template>
  <div class="login-page m-auto mb-5">
    <h5 class="my-4 text-center">登录知否</h5>
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
      <template #footer>
        <p @click.stop="toRegister">
          <router-link to="/register">
            <small>还没有账户？去注册一个新的吧！</small>
          </router-link>
        </p>
        <button type="button" class="btn btn-primary btn-block btn-large">
          登录
        </button>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { noop } from "@/lib/utils";
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
    const router = useRouter();
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
        })
        .catch(noop);
    };
    const toRegister = () => {
      router.push({ path: "/register" });
    };

    return {
      emailValue,
      emailRules,
      passwordValue,
      passwordRules,
      toRegister,
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
