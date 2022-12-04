<template>
  <BaseCard v-if="!$store.state.user.isPullingInfo">
    <div class="row justify-content-md-center">
      <div class="col-3">
        <form @submit.prevent="charge">
          <div class="mb-3">
            <input
              v-model="amount"
              type="text"
              class="form-control"
              placeholder="请输入充值金额"
            />
          </div>
          <div class="error-message">{{ errorMessage }}</div>
          <button type="submit" class="btn btn-primary">充值</button>
        </form>
      </div>
    </div>
  </BaseCard>
</template>

<script>
import BaseCard from "../components/BaseCard.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import $ from "jquery";

export default {
  name: "ChargeView",
  components: {
    BaseCard,
  },
  setup() {
    const store = useStore();
    let amount = ref("");
    let errorMessage = ref("");

    const charge = () => {
      $.ajax({
        url: "http://localhost:8081/charge",
        type: "POST",
        headers: {
          Authorization: "Bearer " + store.state.user.token,
        },
        data: JSON.stringify({
          amount: amount.value,
        }),
        contentType: "application/json;charset=utf-8",
        success(resp) {
          if (resp.message === "success") {
            amount.value = "";
            alert("充值成功");
          } else {
            alert(resp.message);
          }
        },
      });
    };

    return {
      amount,
      errorMessage,
      charge,
    };
  },
};
</script>

<style scoped>
button {
  width: 100%;
}

.error-message {
  color: red;
}
</style>
