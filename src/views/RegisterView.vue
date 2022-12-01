<template>
  <BaseCard>
    <div class="row justify-content-md-center">
      <div class="col-3">
        <form @submit.prevent="register">
          <div class="mb-3">
            <label for="username" class="form-label">用户名</label>
            <input
              v-model="username"
              type="text"
              class="form-control"
              id="username"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">密码</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="password"
            />
          </div>
          <div class="mb-3">
            <label for="confirmedPassword" class="form-label">确认密码</label>
            <input
              v-model="confirmedPassword"
              type="password"
              class="form-control"
              id="confirmedPassword"
            />
          </div>
          <div class="error-message">{{ errorMessage }}</div>
          <button type="submit" class="btn btn-primary">注册</button>
        </form>
      </div>
    </div>
  </BaseCard>
</template>

<script>
import BaseCard from "../components/BaseCard.vue";
import { ref } from "vue";
import $ from "jquery";
import router from "../router/index";

export default {
  name: "RegisterView",
  components: {
    BaseCard,
  },
  setup() {
    let username = ref("");
    let password = ref("");
    let confirmedPassword = ref("");
    let errorMessage = ref("");

    const register = () => {
      $.ajax({
        url: "http://localhost:8081/register",
        type: "POST",
        data: JSON.stringify({
          username: username.value,
          password: password.value,
          confirmedPassword: confirmedPassword.value,
        }),
        contentType: "application/json;charset=utf-8",
        success(resp) {
          if (resp.message === "success") {
            username.value = "";
            password.value = "";
            confirmedPassword.value = "";
            router.push({ name: "login" });
          } else {
            errorMessage.value = resp.message;
          }
        },
      });
    };

    return {
      username,
      password,
      confirmedPassword,
      errorMessage,
      register,
    };
  },
};
</script>

<style scoped>
button {
  width: 100%;
}

.error-message {
  color: red;
}
</style>
