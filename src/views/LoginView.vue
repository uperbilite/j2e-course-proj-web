<template>
  <BaseCard>
    <form>
      <div class="mb-3">
        <label for="username" class="form-label">用户名</label>
        <input type="text" class="form-control" id="username" />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">密码</label>
        <input type="password" class="form-control" id="password" />
      </div>
      <button type="submit" class="btn btn-primary">登录</button>
    </form>
  </BaseCard>
</template>

<script>
import BaseCard from "../components/BaseCard.vue";

export default {
  name: "LoginView",
  components: {
    BaseCard,
  },
};
</script>

<style scoped></style>
