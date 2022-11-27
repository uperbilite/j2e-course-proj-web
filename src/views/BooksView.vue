<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col">
        <BookCard :book="book"></BookCard>
      </div>
    </div>
  </div>
</template>

<script>
import BookCard from "../components/BookCard.vue";
import { reactive } from "vue"

export default {
  name: "BooksView",
  components: {
    BookCard,
  },
  setup() {
    const book = reactive({
      id: 100,
      name: "mybook",
      cover: "http://www.bingguner.com/upimg/allimg/191210/19-191210103310293.jpg",
      price: 200,
      description: "this is a book",
    });

    return {
      book,
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
