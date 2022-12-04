<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <div class="row align-items-center">
          <div class="col">
            <div class="bookname">{{ item.name }}</div>
          </div>
          <div class="col">
            <div class="bookprice">{{ item.price }}¥</div>
          </div>
          <div class="col">
            <button
              @click="delItem"
              type="button"
              class="btn btn-danger btn-sm"
            >
              删除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props, context) {
    const delItem = () => {
      context.emit("delItem", props.item);
    };

    return {
      delItem,
    };
  },
};
</script>

<style scoped>
button {
  float: right;
}
.container {
  margin-top: 20px;
  width: 50%;
}
</style>
