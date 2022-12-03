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
import { useStore } from "vuex";
import $ from "jquery";

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
      $.ajax({
        url: "http://localhost:8081/cart/" + store.state.user.id,
        type: "POST",
        data: JSON.stringify({
          bookId: props.book.id,
        }),
        contentType: "application/json;charset=utf-8",
        success(resp) {
          if (resp.message === "success") {
            alert("添加成功");
            store.dispatch("cart/addItem", props.book);
          } else {
            alert(resp.message);
          }
        },
      });
    };

    return {
      addToCart,
    };
  },
};
</script>

<style scoped></style>
