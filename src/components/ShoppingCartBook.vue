<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <div class="row align-items-start">
          <div class="col">
            <div class="bookname">书名：{{ book.name }}</div>
          </div>
          <div class="col">
            <div class="bookprice">价格: {{ book.price }}</div>
          </div>
          <div class="col">
            <button
              @click="deleteItem"
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
  name: "ShoppingCartBook",
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  setup(props, context) {
    const deleteItem = () => {
      context.emit("deleteItem", props.book);
    };

    return {
      deleteItem,
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
}
</style>
