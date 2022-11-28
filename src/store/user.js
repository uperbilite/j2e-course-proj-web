import $ from "jquery";

export default {
  namespaced: true,
  state: {
    id: "",
    username: "",
  },
  getters: {},
  mutations: {},
  actions: {
    login(context, userInfo) {
      $.ajax({
        url: "https://app165.acapp.acwing.com.cn/api/token/",
        type: "POST",
        data: {
          username: userInfo.username,
          password: userInfo.password,
        },
        success(resp) {
          console.log(resp);
        },
      });
    },
  },
  modules: {},
};
