import $ from "jquery";

export default {
  namespaced: true,
  state: {
    id: 0,
    username: "",
    token: "",
    is_login: false,
    is_pulling_info: true,
  },
  getters: {},
  mutations: {
    updateUser(state, user) {
      state.id = user.id;
      state.username = user.username;
      state.is_login = user.is_login;
    },
    updateToken(state, token) {
      state.token = token;
    },
    logout(state) {
      (state.id = 0), (state.username = "");
      state.token = "";
      state.is_login = "";
    },
    updateIsPullingInfo(state, is_pulling_info) {
      state.is_pulling_info = is_pulling_info;
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
              is_login: true,
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
    },
  },
  modules: {},
};
