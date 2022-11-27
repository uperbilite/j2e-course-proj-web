<template>
  <div class="container">
    <div class="card h-100">
      <img
        :src="book.cover"
        class="card-img-top"
        alt=""
      />
      <div class="card-body">
        <h5 class="card-title">{{ book.name }}</h5>
        <p class="card-text">
          {{ book.description }}
        </p>
        <a href="#" class="btn btn-primary btn-sm">加入购物车</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookCard",
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
