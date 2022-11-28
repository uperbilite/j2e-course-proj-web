export default {
  namespaced: true,
  state: {
    books: [],
  },
  getters: {
    books: (state) => state.books,
    totalPrice: (state) => state.books.reduce((acc, cur) => acc + cur.price, 0),
    count: (state) => state.books.length,
  },
  mutations: {
    addBook(state, { book }) {
      state.books.push(book);
      console.log("vuex/books", state.books);
    },
    delBook(state, { bookId }) {
      const index = state.books.findIndex((item) => item.id === bookId);
      if (index > -1) {
        state.books.splice(index, 1);
      }
    },
  },
  actions: {
    addBook: (context, book) => {
      context.commit("addBook", { book });
    },
    delBook: (context, bookId) => {
      context.commit("delBook", { bookId });
    },
  },
  modules: {},
};
