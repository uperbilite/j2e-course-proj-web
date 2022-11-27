<template>
  <div v-for="book in shoppingCartBooks.books" :key="book.id">
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
import { reactive } from "vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "ShoppingCartView",
  components: {
    ShoppingCartBook,
  },
  setup() {
    const route = useRoute();
    console.log(route.params.userId);
    const shoppingCartBooks = reactive({
      count: 4,
      books: [
        {
          id: 100,
          name: "mybook",
          cover:
            "http://www.bingguner.com/upimg/allimg/191210/19-191210103310293.jpg",
          price: 200,
          description: "this is a book",
        },
        {
          id: 200,
          name: "mybook1",
          cover:
            "http://www.bingguner.com/upimg/allimg/191210/19-191210103310293.jpg",
          price: 200,
          description: "this is a book",
        },
        {
          id: 300,
          name: "mybook2",
          cover:
            "http://www.bingguner.com/upimg/allimg/191210/19-191210103310293.jpg",
          price: 200,
          description: "this is a book",
        },
        {
          id: 400,
          name: "mybook3",
          cover:
            "http://www.bingguner.com/upimg/allimg/191210/19-191210103310293.jpg",
          price: 200,
          description: "this is a book",
        },
      ],
    });

    const deleteItem = (book) => {
      shoppingCartBooks.books = shoppingCartBooks.books.filter(
        (b) => b !== book
      );
    };

    const totalPrice = computed(() => {
      return shoppingCartBooks.books.reduce((acc, cur) => acc + cur.price, 0);
    });

    return {
      shoppingCartBooks,
      deleteItem,
      totalPrice,
    };
  },
};
</script>

<style scoped></style>
