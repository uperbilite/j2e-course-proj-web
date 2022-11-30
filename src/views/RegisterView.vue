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
            <label for="confirmed_password" class="form-label">确认密码</label>
            <input
              v-model="confirmed_password"
              type="password"
              class="form-control"
              id="confirmed_password"
            />
          </div>
          <div class="error-message">{{ error_message }}</div>
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
import { useStore } from "vuex";

export default {
  name: "RegisterView",
  components: {
    BaseCard,
  },
  setup() {
    const store = useStore();
    let username = ref("");
    let password = ref("");
    let confirmed_password = ref("");
    let error_message = ref("");

    const register = () => {
      $.ajax({
        url: "http://localhost:8081/register",
        type: "POST",
        data: JSON.stringify({
          username: username.value,
          password: password.value,
          confirmedPassword: confirmed_password.value,
        }),
        contentType: "application/json;charset=utf-8",
        success(resp) {
          if (resp.message === "success") {
            store.dispatch("user/login", {
              username: username.value,
              password: password.value,
              success() {
                console.log("register and login successfully");
              },
              error() {
                error_message.value = "系统异常，请稍后重试";
              },
            });
          } else {
            error_message.value = resp.message;
          }
        },
      });
    };

    return {
      username,
      password,
      confirmed_password,
      error_message,
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
