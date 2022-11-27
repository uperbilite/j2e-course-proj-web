<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div v-for="book in books.books" :key="book.id">
        <div class="col">
          <BookCard @addToCart="addToCart" :book="book"></BookCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookCard from "../components/BookCard.vue";
import { reactive } from "vue";

export default {
  name: "BooksView",
  components: {
    BookCard,
  },
  setup() {
    const books = reactive({
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

    const addToCart = (book) => {
      books.books.push(book);
      console.log("add");
    };

    return {
      books,
      addToCart,
    };
  },
};
</script>

<style scoped>
.container {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
