import $ from "jquery";

export default {
  namespaced: true,
  state: {
    id: "",
    username: "",
    token: "",
    is_login: false,
  },
  getters: {},
  mutations: {
    updateUser(state, user) {
      state.id = user.id;
      state.username = user.username;
      state.token = user.token;
      state.is_login = user.is_login;
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
          const token = resp.token;
          $.ajax({
            url: "http://localhost:8081/info",
            type: "GET",
            headers: {
              Authorization: "Bearer " + token,
            },
            success(resp) {
              context.commit("updateUser", {
                ...resp,
                token: token,
                is_login: true,
              });
              data.success();
            },
          });
        },
        error() {
          data.error();
        },
      });
    },
  },
  modules: {},
};
