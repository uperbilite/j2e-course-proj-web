<template>
  <div v-for="book in books" :key="book.id">
    <CartBook @delBook="delBook" :book="book"></CartBook>
  </div>
  <nav class="navbar fixed-bottom navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand">合计：{{ totalPrice }}</a>
      <div class="d-flex">
        <button @click="checkout" class="btn btn-outline-success" type="button">
          结算
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import CartBook from "../components/CartBook.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import $ from "jquery";

export default {
  name: "CartView",
  components: {
    CartBook,
  },
  setup() {
    const store = useStore();

    const delBook = (book) => {
      $.ajax({
        url: "http://localhost:8081/cart/" + store.state.user.id,
        type: "DELETE",
        data: JSON.stringify({
          bookId: book.id,
        }),
        contentType: "application/json;charset=utf-8",
        success(resp) {
          if (resp.message === "success") {
            store.dispatch("books/delBook", book.id);
          } else {
            alert(resp.message);
          }
        },
      });
    };

    const checkout = () => {
      $.ajax({
        url: "http://localhost:8081/checkout",
        type: "POST",
        headers: {
          Authorization: "Bearer " + store.state.user.token,
        },
        success(resp) {
          if (resp.message === "success") {
            store.commit("books/updateBooks", []);
            alert("购买成功");
          } else {
            alert(resp.message);
          }
        },
      });
    };

    const books = computed(() => store.getters["books/books"]);
    const totalPrice = computed(() => store.getters["books/totalPrice"]);

    return {
      books,
      totalPrice,
      delBook,
      checkout,
    };
  },
};
</script>

<style scoped>
button {
  float: left;
}
</style>
