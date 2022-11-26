<template>
  <div class="container">
    <div class="card" style="width: 18rem">
      <img
        class="card-img-top"
        src="http://www.bingguner.com/upimg/allimg/191210/19-191210103310293.jpg"
        alt=""
      />
      <slot name="bookcover"></slot>

      <div class="card-body">
        <h5 class="card-title">
          <slot name="bookname"></slot>
        </h5>
        <a href="#" class="btn btn-primary btn-sm">加入购物车</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookCard",
};
</script>

<style scoped>
.card {
  margin-top: 20px;
}
</style>
