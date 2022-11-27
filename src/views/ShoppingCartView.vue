<template>
  <ShoppingCartItem @deleteItem="deleteItem" :book="book"></ShoppingCartItem>
  <ShoppingCartItem :book="book"></ShoppingCartItem>
  <ShoppingCartItem :book="book"></ShoppingCartItem>
  <ShoppingCartItem :book="book"></ShoppingCartItem>
  <ShoppingCartItem :book="book"></ShoppingCartItem>
  <ShoppingCartItem :book="book"></ShoppingCartItem>
  <ShoppingCartItem :book="book"></ShoppingCartItem>
  <ShoppingCartItem :book="book"></ShoppingCartItem>
  <ShoppingCartItem :book="book"></ShoppingCartItem>
  <ShoppingCartItem :book="book"></ShoppingCartItem>

  <nav class="navbar sticky-bottom navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">合计：</a>
    </div>
  </nav>
</template>

<script>
import ShoppingCartItem from "../components/ShoppingCartItem.vue";
import { reactive } from "vue";

export default {
  name: "ShoppingCartView",
  components: {
    ShoppingCartItem,
  },
  setup() {
    const book = reactive({
      id: 100,
      name: "mybook",
      cover:
        "http://www.bingguner.com/upimg/allimg/191210/19-191210103310293.jpg",
      price: 200,
      description: "this is a book",
    });

    const deleteItem = () => {
      console.log("deleteItem");
    };

    return {
      book,
      deleteItem,
    };
  },
};
</script>

<style scoped></style>
