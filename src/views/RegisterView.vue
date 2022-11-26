<template>
  注册
  <BookCard>
    <template #bookcover></template>
    <template #bookname>3412</template>
  </BookCard>
</template>

<script>
import BookCard from "../components/BookCard.vue";

export default {
  name: "RegisterView",
  components: {
    BookCard,
  },
};
</script>

<style scoped></style>
