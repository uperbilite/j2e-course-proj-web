<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div v-for="book in books" :key="book.id">
        <div class="col">
          <BookCard :book="book"></BookCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookCard from "../components/BookCard.vue";
import { ref } from "vue";
import $ from "jquery";

export default {
  name: "BooksView",
  components: {
    BookCard,
  },
  setup() {
    let books = ref([]);

    //$.ajax({
    //  url: "https://app165.acapp.acwing.com.cn/myspace/userlist/",
    //  type: "GET",
    //  success(resp) {
    //    books.value = resp;
    //  }
    //});

    $.ajax({
      url: "http://localhost:8081/books",
      type: "GET",
      success(resp) {
        books.value = resp;
        console.log(resp);
      },
    });

    return {
      books,
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
