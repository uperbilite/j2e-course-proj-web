<template>
  所有书籍
  <BookCard>
    <template #bookcover></template>
    <template #bookname>3412</template>
  </BookCard>
</template>

<script>
import BookCard from "../components/BookCard.vue";

export default {
  name: "BooksView",
  components: {
    BookCard,
  },
};
</script>

<style scoped></style>
