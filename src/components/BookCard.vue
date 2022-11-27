<template>
  <div class="container">
    <div class="card h-100">
      <img :src="book.cover" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">{{ book.name }}</h5>
        <p class="card-text">
          {{ book.description }}
        </p>
        <button @click="addToCart" type="button" class="btn btn-primary btn-sm">
          加入购物车
        </button>
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
  setup(props, context) {
    const addToCart = () => {
      context.emit("addToCart");
    };

    return {
      addToCart,
    };
  },
};
</script>

<style scoped></style>
