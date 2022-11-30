<template>
  <div v-for="book in books" :key="book.id">
    <ShoppingCartBook @deleteItem="deleteItem" :book="book"></ShoppingCartBook>
  </div>
  <nav class="navbar fixed-bottom navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">合计：{{ totalPrice }}</a>
    </div>
  </nav>
</template>

<script>
import ShoppingCartBook from "../components/ShoppingCartBook.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "ShoppingCartView",
  components: {
    ShoppingCartBook,
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
