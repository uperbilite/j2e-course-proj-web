<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }"
        >网上书店</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link"
              aria-current="page"
              :to="{ name: 'home' }"
              >主页</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'books' }"
              >全部书籍</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'cart', params: { userId: $store.state.user.id } }"
              >购物车</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav" v-if="$store.state.user.isLogin">
          <li class="nav-item">
            <a class="nav-link" href="#">{{ $store.state.user.username }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style="cursor: pointer" @click="logout">退出</a>
          </li>
        </ul>
        <ul class="navbar-nav" v-else-if="!$store.state.user.isPullingInfo">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'login' }"
              >登录</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'register' }"
              >注册</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "NavBar",
  setup() {
    const store = useStore();

    const logout = () => {
      store.dispatch("user/logout");
    };

    return {
      logout,
    };
  },
};
</script>

<style scoped></style>
