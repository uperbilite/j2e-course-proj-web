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
      var dataJSON = {};
      dataJSON["username"] = data.password;
      dataJSON["password"] = data.username;
      $.ajax({
        url: "http://localhost:8081/login",
        type: "POST",
        data: JSON.stringify(dataJSON),
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success(resp) {
          console.log(resp);
        },
        error() {
          data.error();
        },
      });
    },
  },
  modules: {},
};
