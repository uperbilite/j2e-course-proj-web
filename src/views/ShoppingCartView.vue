<template>
  <ShoppingCartItem></ShoppingCartItem>
  <ShoppingCartItem></ShoppingCartItem>
  <ShoppingCartItem></ShoppingCartItem>
  <ShoppingCartItem></ShoppingCartItem>
  <ShoppingCartItem></ShoppingCartItem>
  <ShoppingCartItem></ShoppingCartItem>
  <ShoppingCartItem></ShoppingCartItem>
  <ShoppingCartItem></ShoppingCartItem>
  <ShoppingCartItem></ShoppingCartItem>
  <ShoppingCartItem></ShoppingCartItem>
  <nav class="navbar sticky-bottom navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">合计：</a>
    </div>
  </nav>
</template>

<script>
import ShoppingCartItem from "../components/ShoppingCartItem.vue";

export default {
  name: "ShoppingCartView",
  components: {
    ShoppingCartItem,
  },
};
</script>

<style scoped></style>
