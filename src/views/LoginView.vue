<template>
  登录
  <BookCard>
    <template #bookcover></template>
    <template #bookname>3412</template>
  </BookCard>
</template>

<script>
import BookCard from "../components/BookCard.vue";

export default {
  name: "LoginView",
  components: {
    BookCard,
  },
};
</script>

<style scoped></style>
