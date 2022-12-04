<template>
  <div v-for="item in items" :key="item.id">
    <CartItem @delItem="delItem" :item="item"></CartItem>
  </div>
  <nav class="navbar fixed-bottom navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand">合计：{{ totalPrice }}¥</a>
      <div class="d-flex">
        <button @click="checkout" class="btn btn-outline-success" type="button">
          结算
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import CartItem from "../components/CartItem.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import $ from "jquery";

export default {
  name: "CartView",
  components: {
    CartItem,
  },
  setup() {
    const store = useStore();

    const delItem = (item) => {
      $.ajax({
        url: "http://localhost:8081/cart",
        type: "DELETE",
        headers: {
          Authorization: "Bearer " + store.state.user.token,
        },
        data: JSON.stringify({
          bookId: item.id,
        }),
        contentType: "application/json;charset=utf-8",
        success(resp) {
          if (resp.message === "success") {
            store.dispatch("cart/delItem", item.id);
          } else {
            alert(resp.message);
          }
        },
      });
    };

    const checkout = () => {
      $.ajax({
        url: "http://localhost:8081/checkout",
        type: "POST",
        headers: {
          Authorization: "Bearer " + store.state.user.token,
        },
        success(resp) {
          if (resp.message === "success") {
            store.commit("cart/updateItems", []);
            alert("购买成功");
          } else {
            alert(resp.message);
          }
        },
      });
    };

    const items = computed(() => store.getters["cart/items"]);
    const totalPrice = computed(() => store.getters["cart/totalPrice"]);

    return {
      items,
      totalPrice,
      delItem,
      checkout,
    };
  },
};
</script>

<style scoped>
button {
  float: left;
}
</style>
