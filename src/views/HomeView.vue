<template>
  <div class="home">
    <BookCard>
      <template #bookcover></template>
      <template #bookname>3412</template>
    </BookCard>
  </div>
</template>

<script>
import BookCard from "../components/BookCard.vue";

export default {
  name: "HomeView",
  components: {
    BookCard,
  },
};
</script>
