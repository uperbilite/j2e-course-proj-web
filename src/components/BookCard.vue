<template>
  <div class="container">
    <div class="card h-100">
      <img class="card-img-top" :src="book.cover" alt="" />
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
import router from "@/router";
import { useStore } from "vuex";

export default {
  name: "BookCard",
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    const addToCart = () => {
      if (!store.state.user.is_login) {
        router.push({ name: "login" });
      } else {
        store.dispatch("books/addBook", props.book);
      }
    };

    return {
      addToCart,
    };
  },
};
</script>

<style scoped></style>
