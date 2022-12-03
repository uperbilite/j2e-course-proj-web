export default {
  namespaced: true,
  state: {
    items: [],
  },
  getters: {
    items: (state) => state.items,
    totalPrice: (state) => state.items.reduce((acc, cur) => acc + cur.price, 0),
    count: (state) => state.items.length,
  },
  mutations: {
    updateItems(state, items) {
      state.items = items;
    },
    addItem(state, { item }) {
      state.items.push(item);
    },
    delItem(state, { itemId }) {
      const index = state.items.findIndex((i) => i.id === itemId);
      if (index > -1) {
        state.items.splice(index, 1);
      }
    },
  },
  actions: {
    addItem: (context, item) => {
      context.commit("addItem", { item });
    },
    delItem: (context, itemId) => {
      context.commit("delItem", { itemId });
    },
  },
  modules: {},
};
