<template>
  <BaseCard v-if="!$store.state.user.isPullingInfo">
    <div class="row justify-content-md-center">
      <div class="col-3">
        <form @submit.prevent="login">
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
          <div class="error-message">{{ errorMessage }}</div>
          <button type="submit" class="btn btn-primary">登录</button>
        </form>
      </div>
    </div>
  </BaseCard>
</template>

<script>
import BaseCard from "../components/BaseCard.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import router from "@/router";

export default {
  name: "LoginView",
  components: {
    BaseCard,
  },
  setup() {
    const store = useStore();
    let username = ref("");
    let password = ref("");
    let errorMessage = ref("");

    const jwt_token = localStorage.getItem("jwt_token");
    if (jwt_token) {
      store.commit("user/updateToken", jwt_token);
      store.dispatch("user/getInfo", {
        success() {
          router.push({ name: "home" });
          store.commit("user/updateIsPullingInfo", false);
        },
        error() {
          store.commit("user/updateIsPullingInfo", false);
        },
      });
    } else {
      store.commit("user/updateIsPullingInfo", false);
    }

    const login = () => {
      errorMessage.value = "";
      store.dispatch("user/login", {
        username: username.value,
        password: password.value,
        success() {
          store.dispatch("user/getInfo", {
            success() {
              username.value = "";
              password.value = "";
              alert("登录成功");
              router.push({ name: "home" });
            },
          });
        },
        error() {
          errorMessage.value = "用户名或密码错误";
        },
      });
    };

    return {
      username,
      password,
      errorMessage,
      login,
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
