import router from "@/router";
import $ from "jquery";
import store from ".";

export default {
  namespaced: true,
  state: {
    id: 0,
    username: "",
    token: "",
    isLogin: false,
    isPullingInfo: true,
  },
  getters: {
    id: (state) => state.id,
  },
  mutations: {
    updateUser(state, user) {
      state.id = user.id;
      state.username = user.username;
      state.isLogin = user.isLogin;
    },
    updateToken(state, token) {
      state.token = token;
    },
    updateIsPullingInfo(state, isPullingInfo) {
      state.isPullingInfo = isPullingInfo;
    },
    logout(state) {
      state.id = 0;
      state.username = "";
      state.token = "";
      state.isLogin = false;
      state.isPullingInfo = true;
    },
  },
  actions: {
    login(context, data) {
      $.ajax({
        url: "http://localhost:8081/login",
        type: "POST",
        data: JSON.stringify({
          username: data.username,
          password: data.password,
        }),
        contentType: "application/json;charset=utf-8",
        success(resp) {
          if (resp.message === "success") {
            localStorage.setItem("jwt_token", resp.token);
            context.commit("updateToken", resp.token);
            data.success();
          } else {
            data.error();
          }
        },
        error() {
          data.error();
        },
      });
    },
    getInfo(context, data) {
      $.ajax({
        url: "http://localhost:8081/info",
        type: "GET",
        headers: {
          Authorization: "Bearer " + context.state.token,
        },
        success(resp) {
          if (resp.message === "success") {
            context.commit("updateUser", {
              ...resp,
              isLogin: true,
            });
            $.ajax({
              url: "http://localhost:8081/cart/" + store.getters["user/id"],
              type: "GET",
              success(resp) {
                store.commit("books/updateBooks", resp);
                console.log(store.state.books);
              },
            });
            data.success();
          } else {
            data.error();
          }
        },
        error() {
          data.error();
        },
      });
    },
    logout(context) {
      localStorage.removeItem("jwt_token");
      context.commit("logout");
      router.push({ name: "login" });
    },
  },
  modules: {},
};
