<template>
  <div v-for="book in books" :key="book.id">
    <CartBook @deleteItem="deleteItem" :book="book"></CartBook>
  </div>
  <nav class="navbar fixed-bottom navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">合计：{{ totalPrice }}</a>
    </div>
  </nav>
</template>

<script>
import CartBook from "../components/CartBook.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "CartView",
  components: {
    CartBook,
  },
  setup() {
    const store = useStore();

    const deleteItem = (book) => {
      store.dispatch("books/delBook", book.id);
    };

    const books = computed(() => store.getters["books/books"]);
    const totalPrice = computed(() => store.getters["books/totalPrice"]);

    return {
      books,
      deleteItem,
      totalPrice,
    };
  },
};
</script>

<style scoped></style>
