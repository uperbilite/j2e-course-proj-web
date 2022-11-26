<template>
  购物车
  <BookCard>
    <template #bookcover></template>
    <template #bookname>3412</template>
  </BookCard>
</template>

<script>
import BookCard from "../components/BookCard.vue";

export default {
  name: "ShoppingCartView",
  components: {
    BookCard,
  },
};
</script>

<style scoped></style>
